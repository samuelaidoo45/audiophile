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
    <section className={styles.categories} aria-label="Product Categories">
      <div className={styles.container}>
        {categories.map((category, index) => (
          <div key={index} className={styles.category}>
            <div className={styles.imageWrapper}>
              <Image
                src={category.image}
                alt={`${category.name} thumbnail`}
                width={180}
                height={160}
                className={styles.image}
                priority={index === 0}
              />
            </div>
            <h3 className={styles.name}>{category.name}</h3>
            <Link 
              href={category.link} 
              className={styles.shopButton}
              aria-label={`Shop ${category.name}`}
            >
              SHOP
              <svg width="8" height="12" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                <path d="M1.322 1l5 5-5 5" stroke="#D87D4A" strokeWidth="2" fill="none" fillRule="evenodd"/>
              </svg>
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
} 