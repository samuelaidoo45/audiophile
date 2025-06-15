"use client";

import styles from './Categories.module.css';
import Image from 'next/image';
import Link from 'next/link';

export default function Categories() {
  const categories = [
    {
      name: 'HEADPHONES',
      image: '/assets/shared/desktop/image-category-thumbnail-headphones.png',
      link: '/headphones'
    },
    {
      name: 'SPEAKERS',
      image: '/assets/shared/desktop/image-category-thumbnail-speakers.png',
      link: '/speakers'
    },
    {
      name: 'EARPHONES',
      image: '/assets/shared/desktop/image-category-thumbnail-earphones.png',
      link: '/earphones'
    }
  ];

  return (
    <section className={styles.categories}>
      <div className={styles.container}>
        {categories.map((category, index) => (
          <div key={index} className={styles.category}>
            <div className={styles.imageWrapper}>
              <Image
                src={category.image}
                alt={category.name}
                width={150}
                height={150}
                className={styles.image}
              />
            </div>
            <h2 className={styles.name}>{category.name}</h2>
            <Link href={category.link} className={styles.shopButton}>
              SHOP
              <Image 
                src="/assets/shared/desktop/icon-arrow-right.svg" 
                alt="arrow" 
                width={8} 
                height={12} 
              />
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
} 