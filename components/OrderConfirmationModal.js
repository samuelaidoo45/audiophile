import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import styles from './OrderConfirmationModal.module.css';

const OrderConfirmationModal = ({ isOpen, onClose, orderDetails }) => {
  const router = useRouter();
  const [showAllItems, setShowAllItems] = useState(true); // Start with true for desktop
  const [isDesktop, setIsDesktop] = useState(false);

  // Check if it's desktop view
  useEffect(() => {
    const checkDesktop = () => {
      setIsDesktop(window.innerWidth >= 768);
    };
    
    checkDesktop();
    window.addEventListener('resize', checkDesktop);
    
    return () => window.removeEventListener('resize', checkDesktop);
  }, []);

  // Set initial state based on screen size
  useEffect(() => {
    setShowAllItems(isDesktop);
  }, [isDesktop]);

  if (!isOpen) return null;

  const { items, grandTotal } = orderDetails;
  const mainItem = items[0];
  const otherItemsCount = items.length - 1;

  return (
    <div className={styles.modalOverlay}>
      <div className={styles.modal}>
        <div className={styles.checkmark}>
          <Image
            src="/assets/checkout/icon-order-confirmation.svg"
            alt="Order confirmed"
            width={64}
            height={64}
          />
        </div>
        
        <h2 className={styles.title}>
          THANK YOU<br />
          FOR YOUR ORDER
        </h2>
        
        <p className={styles.confirmation}>
          You will receive an email confirmation shortly.
        </p>

        <div className={styles.orderSummary}>
          <div className={styles.itemsList}>
            {/* Always show first item */}
            <div className={styles.orderItem}>
              <div className={styles.productImage}>
                <img src={mainItem.image} alt={mainItem.name} />
              </div>
              <div className={styles.productDetails}>
                <h3>{mainItem.shortName || mainItem.name.split(' ').slice(0, 2).join(' ')}</h3>
                <p>$ {mainItem.price.toLocaleString()}</p>
              </div>
              <span className={styles.quantity}>x{mainItem.quantity}</span>
            </div>

            {/* Show additional items if expanded or if only one other item */}
            {showAllItems && items.slice(1).map((item, index) => (
              <div key={index} className={styles.orderItem}>
                <div className={styles.productImage}>
                  <img src={item.image} alt={item.name} />
                </div>
                <div className={styles.productDetails}>
                  <h3>{item.shortName || item.name.split(' ').slice(0, 2).join(' ')}</h3>
                  <p>$ {item.price.toLocaleString()}</p>
                </div>
                <span className={styles.quantity}>x{item.quantity}</span>
              </div>
            ))}

            {/* Toggle button for multiple items */}
            {otherItemsCount > 0 && (
              <div className={styles.toggleSection}>
                <hr className={styles.divider} />
                <button 
                  className={styles.toggleButton}
                  onClick={() => setShowAllItems(!showAllItems)}
                >
                  {showAllItems ? 'View less' : `and ${otherItemsCount} other item(s)`}
                </button>
              </div>
            )}
          </div>

          <div className={styles.grandTotal}>
            <span>GRAND TOTAL</span>
            <span className={styles.amount}>$ {grandTotal.toLocaleString()}</span>
          </div>
        </div>

        <button 
          className={styles.backButton}
          onClick={() => {
            router.push('/');
          }}
        >
          BACK TO HOME
        </button>
      </div>
    </div>
  );
};

export default OrderConfirmationModal; 