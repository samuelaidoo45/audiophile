import { useRouter } from 'next/navigation';
import Image from 'next/image';
import styles from './OrderConfirmationModal.module.css';

const OrderConfirmationModal = ({ isOpen, onClose, orderDetails }) => {
  const router = useRouter();

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
            <div className={styles.mainItem}>
              <div className={styles.productInfo}>
                <Image
                  src={mainItem.image}
                  alt={mainItem.name}
                  width={50}
                  height={50}
                  className={styles.productImage}
                />
                <div className={styles.productDetails}>
                  <h3>{mainItem.shortName || mainItem.name.split(' ').slice(0, 2).join(' ')}</h3>
                  <p>$ {mainItem.price.toLocaleString()}</p>
                </div>
                <span className={styles.quantity}>x{mainItem.quantity}</span>
              </div>
            </div>
            
            {otherItemsCount > 0 && (
              <div className={styles.otherItems}>
                and {otherItemsCount} other item(s)
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