"use client";

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import styles from './checkout.module.css';
import Image from 'next/image';
import Footer from '@/components/Footer';
import OrderConfirmationModal from '@/components/OrderConfirmationModal';

const CheckoutPage = () => {
  const router = useRouter();
  const [cartItems, setCartItems] = useState([]);
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    zipCode: '',
    city: '',
    country: '',
    paymentMethod: 'e-Money',
    eMoneyNumber: '',
    eMoneyPin: ''
  });

  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});

  useEffect(() => {
    // Get cart items from localStorage
    const savedCart = localStorage.getItem('cart');
    if (savedCart) {
      setCartItems(JSON.parse(savedCart));
    }
  }, []);

  const validateField = (name, value) => {
    switch (name) {
      case 'name':
        return value.trim() ? '' : 'Name is required';
      case 'email':
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value) 
          ? '' 
          : 'Please enter a valid email address';
      case 'phone':
        return /^\+?[\d\s-]{10,}$/.test(value) 
          ? '' 
          : 'Please enter a valid phone number';
      case 'address':
        return value.trim() ? '' : 'Address is required';
      case 'zipCode':
        return /^\d{5}(-\d{4})?$/.test(value) 
          ? '' 
          : 'Please enter a valid ZIP code';
      case 'city':
        return value.trim() ? '' : 'City is required';
      case 'country':
        return value.trim() ? '' : 'Country is required';
      case 'eMoneyNumber':
        return formData.paymentMethod === 'e-Money'
          ? (/^\d{9}$/.test(value) ? '' : 'Please enter a valid 9-digit e-Money number')
          : '';
      case 'eMoneyPin':
        return formData.paymentMethod === 'e-Money'
          ? (/^\d{4}$/.test(value) ? '' : 'Please enter a valid 4-digit PIN')
          : '';
      default:
        return '';
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));

    // Validate on change if field has been touched
    if (touched[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: validateField(name, value)
      }));
    }
  };

  const handleBlur = (e) => {
    const { name, value } = e.target;
    setTouched(prev => ({
      ...prev,
      [name]: true
    }));
    setErrors(prev => ({
      ...prev,
      [name]: validateField(name, value)
    }));
  };

  const handlePaymentMethodChange = (method) => {
    setFormData(prev => ({
      ...prev,
      paymentMethod: method,
      // Reset e-Money fields if switching to Cash
      ...(method === 'Cash' && {
        eMoneyNumber: '',
        eMoneyPin: ''
      })
    }));
  };

  const validateForm = () => {
    const newErrors = {};
    const fieldsToValidate = [
      'name', 'email', 'phone', 'address', 'zipCode', 'city', 'country'
    ];

    if (formData.paymentMethod === 'e-Money') {
      fieldsToValidate.push('eMoneyNumber', 'eMoneyPin');
    }

    fieldsToValidate.forEach(field => {
      const error = validateField(field, formData[field]);
      if (error) {
        newErrors[field] = error;
      }
    });

    setErrors(newErrors);
    setTouched(fieldsToValidate.reduce((acc, field) => ({
      ...acc,
      [field]: true
    }), {}));

    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (validateForm()) {
      const totals = calculateTotals();
      localStorage.removeItem('cart'); // Clear cart immediately after successful validation
      window.dispatchEvent(new Event('cartUpdated')); // Update cart count in header
      setShowConfirmation(true);
    } else {
      console.log('Form has errors');
    }
  };

  const renderFormGroup = (label, name, type = 'text', placeholder) => (
    <div className={styles.formGroup}>
      <div className={styles.labelWrapper}>
        <label htmlFor={name}>{label}</label>
        {touched[name] && errors[name] && (
          <span className={styles.errorMessage}>{errors[name]}</span>
        )}
      </div>
      <input
        type={type}
        id={name}
        name={name}
        value={formData[name]}
        onChange={handleInputChange}
        onBlur={handleBlur}
        placeholder={placeholder}
        className={touched[name] && errors[name] ? styles.inputError : ''}
      />
    </div>
  );

  // Calculate totals
  const calculateTotals = () => {
    const subtotal = cartItems.reduce((total, item) => {
      return total + (item.price * item.quantity);
    }, 0);
    
    const shipping = 50;
    const vat = subtotal * 0.2; // 20% VAT
    const grandTotal = subtotal + shipping;

    return {
      subtotal,
      shipping,
      vat,
      grandTotal
    };
  };

  const totals = calculateTotals();

  return (
    <>
      <div className={styles.pageWrapper}>
        <div className={styles.container}>
          <p 
            onClick={() => router.back()} 
            className={styles.goBack}
          >
            Go Back
          </p>
        </div>

        <div className={`${styles.container} ${styles.mainContent}`}>
          <form onSubmit={handleSubmit} className={styles.checkoutContent}>
            <div className={styles.checkoutForm}>
              <h1>CHECKOUT</h1>

              {/* Billing Details Section */}
              <div className={styles.section}>
                <h2 className={styles.sectionTitle}>BILLING DETAILS</h2>
                <div className={styles.formGrid}>
                  {renderFormGroup('Name', 'name', 'text', 'Alexei Ward')}
                  {renderFormGroup('Email Address', 'email', 'email', 'alexei@mail.com')}
                  {renderFormGroup('Phone Number', 'phone', 'tel', '+1 202-555-0136')}
                </div>
              </div>

              {/* Shipping Info Section */}
              <div className={styles.section}>
                <h2 className={styles.sectionTitle}>SHIPPING INFO</h2>
                <div className={styles.formGrid}>
                  {renderFormGroup('Your Address', 'address', 'text', '1137 Williams Avenue')}
                  {renderFormGroup('ZIP Code', 'zipCode', 'text', '10001')}
                  {renderFormGroup('City', 'city', 'text', 'New York')}
                  {renderFormGroup('Country', 'country', 'text', 'United States')}
                </div>
              </div>

              {/* Payment Details Section */}
              <div className={styles.section}>
                <h2 className={styles.sectionTitle}>PAYMENT DETAILS</h2>
                <div className={styles.formGrid}>
                  <div className={styles.formGroup}>
                    <label>Payment Method</label>
                    <div className={styles.paymentMethods}>
                      <button
                        type="button"
                        className={`${styles.paymentMethod} ${formData.paymentMethod === 'e-Money' ? styles.selected : ''}`}
                        onClick={() => handlePaymentMethodChange('e-Money')}
                      >
                        <div className={styles.radio}>
                          <div className={styles.radioInner}></div>
                        </div>
                        e-Money
                      </button>
                      <button
                        type="button"
                        className={`${styles.paymentMethod} ${formData.paymentMethod === 'Cash' ? styles.selected : ''}`}
                        onClick={() => handlePaymentMethodChange('Cash')}
                      >
                        <div className={styles.radio}>
                          <div className={styles.radioInner}></div>
                        </div>
                        Cash on Delivery
                      </button>
                    </div>
                  </div>

                  {formData.paymentMethod === 'e-Money' && (
                    <>
                      {renderFormGroup('e-Money Number', 'eMoneyNumber', 'text', '238521993')}
                      {renderFormGroup('e-Money PIN', 'eMoneyPin', 'text', '6891')}
                    </>
                  )}
                </div>
              </div>
            </div>

            {/* Summary Section */}
            <div className={styles.summary}>
              <h2>SUMMARY</h2>
              <div className={styles.summaryItems}>
                {cartItems.map((item, index) => (
                  <div key={index} className={styles.summaryItem}>
                    <div className={styles.productInfo}>
                      <Image
                        src={item.image}
                        alt={item.name}
                        width={64}
                        height={64}
                        className={styles.productImage}
                      />
                      <div>
                        <h3>{item.shortName || item.name.split(' ').slice(0, 2).join(' ')}</h3>
                        <p>$ {item.price.toLocaleString()}</p>
                      </div>
                    </div>
                    <span className={styles.quantity}>x{item.quantity}</span>
                  </div>
                ))}
              </div>

              <div className={styles.summaryDetails}>
                <div className={styles.summaryRow}>
                  <span>TOTAL</span>
                  <span className={styles.price}>$ {totals.subtotal.toLocaleString()}</span>
                </div>
                <div className={styles.summaryRow}>
                  <span>SHIPPING</span>
                  <span className={styles.price}>$ {totals.shipping}</span>
                </div>
                <div className={styles.summaryRow}>
                  <span>VAT (INCLUDED)</span>
                  <span className={styles.price}>$ {Math.round(totals.vat).toLocaleString()}</span>
                </div>
                <div className={`${styles.summaryRow} ${styles.grandTotal}`}>
                  <span>GRAND TOTAL</span>
                  <span className={styles.price}>$ {totals.grandTotal.toLocaleString()}</span>
                </div>
              </div>

              <button 
                type="submit" 
                className={styles.continueButton}
                disabled={cartItems.length === 0}
              >
                CONTINUE & PAY
              </button>
            </div>
          </form>
        </div>
      </div>
      <Footer />
      <OrderConfirmationModal
        isOpen={showConfirmation}
        onClose={() => setShowConfirmation(false)}
        orderDetails={{
          items: cartItems,
          grandTotal: calculateTotals().grandTotal
        }}
      />
    </>
  );
};

export default CheckoutPage; 