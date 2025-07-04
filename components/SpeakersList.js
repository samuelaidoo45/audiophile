"use client";

import Image from 'next/image';
import Link from 'next/link';
import styles from './SpeakersList.module.css';
import data from '@/data/data.json';

export default function SpeakersList() {
  const speakers = data
    .filter(product => product.category === 'speakers')
    .sort((a, b) => {
      // First, sort new products to the top
      if (a.new && !b.new) return -1;
      if (!a.new && b.new) return 1;
      return 0;
    });

  const formatProductName = (name) => {
    // Remove the word "Speaker" and trim
    const productName = name.replace('Speaker', '').trim();
    return (
      <>
        {productName}<br />SPEAKER
      </>
    );
  };

  return (
    <div className={styles.productList}>
      {speakers.map((speaker) => (
        <div key={speaker.id} className={styles.productCard}>
          <div className={styles.imageContainer}>
            <picture>
              <source 
                media="(min-width: 1110px)"
                srcSet={speaker.categoryImage.desktop.replace('./assets/', '/assets/')}
              />
              <source 
                media="(min-width: 768px)"
                srcSet={speaker.categoryImage.tablet.replace('./assets/', '/assets/')}
              />
              <Image
                src={speaker.categoryImage.mobile.replace('./assets/', '/assets/')}
                alt={speaker.name}
                width={327}
                height={352}
                className={styles.productImage}
                priority={speaker.new}
              />
            </picture>
          </div>
          <div className={styles.productInfo}>
            {speaker.new && <span className={styles.newProduct}>NEW PRODUCT</span>}
            <h2 className={styles.productName}>{formatProductName(speaker.name)}</h2>
            <p className={styles.productDescription}>{speaker.description}</p>
            <Link href={`/speakers/${speaker.slug}`}>
              <button className={styles.seeProductButton}>SEE PRODUCT</button>
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
} 