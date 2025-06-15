"use client";

import Image from 'next/image';
import { useState } from 'react';
import styles from './Header.module.css';
import MobileMenu from './MobileMenu';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className={styles.header}>
      <div className={styles.headerContent}>
        <button className={styles.menuButton} onClick={toggleMobileMenu}>
          <Image
            src="/assets/shared/tablet/icon-hamburger.svg"
            alt="Menu"
            width={16}
            height={15}
          />
        </button>
        
        <div className={styles.logo}>
          <Image
            src="/assets/shared/desktop/logo.svg"
            alt="audiophile"
            width={143}
            height={25}
          />
        </div>

        <button className={styles.cartButton}>
          <Image
            src="/assets/shared/desktop/icon-cart.svg"
            alt="Cart"
            width={23}
            height={20}
          />
        </button>
      </div>

      <MobileMenu isOpen={isMobileMenuOpen} onClose={() => setIsMobileMenuOpen(false)} />
    </header>
  );
};

export default Header; 