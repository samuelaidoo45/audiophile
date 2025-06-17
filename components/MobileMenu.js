"use client";

import Image from 'next/image';
import Link from 'next/link';
import styles from './MobileMenu.module.css';
import { useEffect } from 'react';

export default function MobileMenu({ onClose }) {
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    // Add event listeners
    document.addEventListener('keydown', handleEscape);
    
    // Prevent scrolling when menu is open
    document.body.style.overflow = 'hidden';

    // Cleanup
    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [onClose]);

  return (
    <div className={styles.menuOverlay}>
      <div className={styles.menuContent}>
        <div className={styles.categoryCard}>
          <div className={styles.imageContainer}>
            <Image
              src="/assets/shared/desktop/image-category-thumbnail-headphones.png"
              alt="Headphones"
              width={150}
              height={150}
              className={styles.categoryImage}
            />
          </div>
          <h3 className={styles.categoryTitle}>HEADPHONES</h3>
          <Link href="/headphones" className={styles.shopLink} onClick={onClose}>
            SHOP <Image src="/assets/shared/desktop/icon-arrow-right.svg" alt="arrow" width={8} height={12} />
          </Link>
        </div>

        <div className={styles.categoryCard}>
          <div className={styles.imageContainer}>
            <Image
              src="/assets/shared/desktop/image-category-thumbnail-speakers.png"
              alt="Speakers"
              width={150}
              height={150}
              className={styles.categoryImage}
            />
          </div>
          <h3 className={styles.categoryTitle}>SPEAKERS</h3>
          <Link href="/speakers" className={styles.shopLink} onClick={onClose}>
            SHOP <Image src="/assets/shared/desktop/icon-arrow-right.svg" alt="arrow" width={8} height={12} />
          </Link>
        </div>

        <div className={styles.categoryCard}>
          <div className={styles.imageContainer}>
            <Image
              src="/assets/shared/desktop/image-category-thumbnail-earphones.png"
              alt="Earphones"
              width={150}
              height={150}
              className={styles.categoryImage}
            />
          </div>
          <h3 className={styles.categoryTitle}>EARPHONES</h3>
          <Link href="/earphones" className={styles.shopLink} onClick={onClose}>
            SHOP <Image src="/assets/shared/desktop/icon-arrow-right.svg" alt="arrow" width={8} height={12} />
          </Link>
        </div>
      </div>
    </div>
  );
} 