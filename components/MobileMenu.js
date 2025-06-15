"use client";

import Image from 'next/image';
import Link from 'next/link';
import styles from './MobileMenu.module.css';

const MobileMenu = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const handleNavigation = () => {
    onClose();
  };

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
          <Link href="/headphones" className={styles.shopLink} onClick={handleNavigation}>
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
          <Link href="/speakers" className={styles.shopLink} onClick={handleNavigation}>
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
          <Link href="/earphones" className={styles.shopLink} onClick={handleNavigation}>
            SHOP <Image src="/assets/shared/desktop/icon-arrow-right.svg" alt="arrow" width={8} height={12} />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default MobileMenu; 