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
            <picture>
              <source 
                media="(min-width: 1110px)" 
                srcSet={headphone.categoryImage.desktop.replace('./assets/', '/assets/')}
              />
              <source 
                media="(min-width: 768px)" 
                srcSet={headphone.categoryImage.tablet.replace('./assets/', '/assets/')}
              />
              <Image
                src={headphone.categoryImage.mobile.replace('./assets/', '/assets/')}
                alt={headphone.name}
                width={540}
                height={560}
                className={styles.productImage}
                priority={headphone.new}
              />
            </picture>
          </div>
          <div className={styles.productInfo}>
            {headphone.new && <span className={styles.newProduct}>NEW PRODUCT</span>}
            <h2 className={styles.productName}>{formatProductName(headphone.name)}</h2>
            <p className={styles.productDescription}>{headphone.description}</p>
            <Link href={`/headphones/${headphone.slug}`} className={styles.seeProductButton}>
              SEE PRODUCT
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
} 