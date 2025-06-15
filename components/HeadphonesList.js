"use client";

import Image from 'next/image';
import Link from 'next/link';
import styles from './HeadphonesList.module.css';
import data from '@/data/data.json';

export default function HeadphonesList() {
  const headphones = data
    .filter(product => product.category === 'headphones')
    .sort((a, b) => {
      // First, sort new products to the top
      if (a.new && !b.new) return -1;
      if (!a.new && b.new) return 1;
      
      // If neither is new, put XX99 Mark I second
      if (!a.new && !b.new) {
        if (a.name.includes('XX99 Mark I')) return -1;
        if (b.name.includes('XX99 Mark I')) return 1;
      }
      
      return 0;
    });

  const formatProductName = (name) => {
    // Split the name at "Headphones" and format each part
    const parts = name.split('Headphones').map(part => part.trim());
    return (
      <>
        {parts[0]}<br />HEADPHONES
      </>
    );
  };

  return (
    <div className={styles.productList}>
      {headphones.map((headphone) => (
        <div key={headphone.id} className={styles.productCard}>
          <div className={styles.imageContainer}>
            <Image
              src={headphone.image.mobile.replace('./', '/')}
              alt={headphone.name}
              width={327}
              height={352}
              className={styles.productImage}
            />
          </div>
          <div className={styles.productInfo}>
            {headphone.new && <span className={styles.newProduct}>NEW PRODUCT</span>}
            <h2 className={styles.productName}>{formatProductName(headphone.name)}</h2>
            <p className={styles.productDescription}>{headphone.description}</p>
            <Link href={`/headphones/${headphone.slug}`}>
              <button className={styles.seeProductButton}>SEE PRODUCT</button>
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
} 