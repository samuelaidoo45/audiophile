import Image from 'next/image';
import Link from 'next/link';
import styles from './EarphonesList.module.css';
import data from '@/data/data.json';

export default function EarphonesList() {
  const earphones = data
    .filter(product => product.category === 'earphones')
    .sort((a, b) => {
      // First, sort new products to the top
      if (a.new && !b.new) return -1;
      if (!a.new && b.new) return 1;
      return 0;
    });

  const formatProductName = (name) => {
    // Remove the word "Earphones" and trim
    const productName = name.replace('Earphones', '').trim();
    return (
      <>
        {productName}<br />EARPHONES
      </>
    );
  };

  return (
    <div className={styles.container}>
      {earphones.map((earphone) => (
        <div key={earphone.id} className={styles.product}>
          <div className={styles.imageContainer}>
            <Image
              src={earphone.image.mobile.replace('./', '/')}
              alt={earphone.name}
              width={327}
              height={352}
              className={styles.productImage}
            />
          </div>
          <div className={styles.productInfo}>
            {earphone.new && <span className={styles.newProduct}>NEW PRODUCT</span>}
            <h2 className={styles.productName}>{formatProductName(earphone.name)}</h2>
            <p>{earphone.description}</p>
            <Link 
              href={`/earphones/${earphone.slug}`} 
              className={styles.seeProduct}
            >
              SEE PRODUCT
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
} 