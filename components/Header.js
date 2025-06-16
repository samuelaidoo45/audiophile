"use client";

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import styles from './Header.module.css';
import MobileMenu from './MobileMenu';
import CartModal from './CartModal';

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);

  return (
    <header className={styles.header}>
      <div className={styles.headerContent}>
        <div className={styles.leftSection}>
          <button 
            className={styles.menuButton}
            onClick={() => setIsMobileMenuOpen(true)}
            aria-label="Open menu"
          >
            <Image
              src="/assets/shared/tablet/icon-hamburger.svg"
              alt=""
              width={16}
              height={15}
              priority
            />
          </button>

          <Link href="/" className={styles.logo}>
            <Image
              src="/assets/shared/desktop/logo.svg"
              alt="audiophile"
              width={143}
              height={25}
              priority
            />
          </Link>
        </div>

      <nav className={styles.nav}>
          <Link href="/" className={styles.navLink}>HOME</Link>
          <Link href="/headphones" className={styles.navLink}>HEADPHONES</Link>
          <Link href="/speakers" className={styles.navLink}>SPEAKERS</Link>
          <Link href="/earphones" className={styles.navLink}>EARPHONES</Link>
      </nav>

        <button 
          className={styles.cartButton}
          onClick={() => setIsCartOpen(true)}
          aria-label="Open cart"
        >
          <Image
            src="/assets/shared/desktop/icon-cart.svg"
            alt=""
            width={23}
            height={20}
          />
        </button>
      </div>

      {isMobileMenuOpen && (
        <MobileMenu onClose={() => setIsMobileMenuOpen(false)} />
      )}

      {isCartOpen && (
        <CartModal onClose={() => setIsCartOpen(false)} />
      )}
    </header>
  );
} 