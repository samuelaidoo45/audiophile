import { useState, useEffect, useRef } from 'react';
import { useRouter } from 'next/navigation';
import styles from './CartModal.module.css';

const CartModal = ({ isOpen, onClose }) => {
  const [cartItems, setCartItems] = useState([]);
  const modalRef = useRef();
  const router = useRouter();

  useEffect(() => {
    // Load cart items from localStorage when component mounts or isOpen changes
    if (isOpen) {
      const savedCart = localStorage.getItem('cart');
      if (savedCart) {
        setCartItems(JSON.parse(savedCart));
      }
    }
  }, [isOpen]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen, onClose]);

  const updateQuantity = (productId, newQuantity) => {
    const updatedCart = cartItems.map(item => {
      if (item.id === productId) {
        const quantity = Math.max(0, newQuantity); // Prevent negative quantities
        return { ...item, quantity };
      }
      return item;
    }).filter(item => item.quantity > 0); // Remove items with quantity 0

    setCartItems(updatedCart);
    localStorage.setItem('cart', JSON.stringify(updatedCart));
    
    // Dispatch custom event for cart updates
    window.dispatchEvent(new Event('cartUpdated'));

    // If cart becomes empty after update, close the modal
    if (updatedCart.length === 0) {
      onClose();
    }
  };

  const removeAllItems = () => {
    setCartItems([]);
    localStorage.removeItem('cart');
    
    // Dispatch custom event for cart updates
    window.dispatchEvent(new Event('cartUpdated'));

    // Close the modal after removing all items
    onClose();
  };

  const calculateTotal = () => {
    return cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);
  };

  const handleCheckout = () => {
    onClose(); // Close the modal first
    router.push('/checkout'); // Navigate to checkout page
  };

  if (!isOpen) return null;

  return (
    <div className={styles.modalOverlay}>
      <div className={styles.modalContent} ref={modalRef}>
        <div className={styles.modalHeader}>
          <h2 className={styles.cartTitle}>CART ({cartItems.length})</h2>
          <button className={styles.removeAll} onClick={removeAllItems}>
            Remove all
          </button>
        </div>

        <div className={styles.cartItems}>
          {cartItems.map((item) => (
            <div key={item.id} className={styles.cartItem}>
              <div className={styles.productImage}>
                <img src={item.image} alt={item.name} />
              </div>
              <div className={styles.productInfo}>
                <h3 className={styles.productName}>{item.name}</h3>
                <p className={styles.productPrice}>$ {item.price.toLocaleString()}</p>
              </div>
              <div className={styles.quantityControls}>
                <button 
                  onClick={() => updateQuantity(item.id, item.quantity - 1)}
                  className={styles.quantityButton}
                >
                  -
                </button>
                <span className={styles.quantity}>{item.quantity}</span>
                <button 
                  onClick={() => updateQuantity(item.id, item.quantity + 1)}
                  className={styles.quantityButton}
                >
                  +
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className={styles.cartTotal}>
          <span>TOTAL</span>
          <span>$ {calculateTotal().toLocaleString()}</span>
        </div>

        <button 
          className={styles.checkoutButton}
          onClick={handleCheckout}
          disabled={cartItems.length === 0}
        >
          CHECKOUT
        </button>
      </div>
    </div>
  );
};

export default CartModal; 