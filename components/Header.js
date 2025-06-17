"use client";

import Image from 'next/image';
import Link from 'next/link';
import { useState, useEffect, useRef } from 'react';
import styles from './Header.module.css';
import MobileMenu from './MobileMenu';
import CartModal from './CartModal';

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const headerRef = useRef(null);

  // Close mobile menu when screen size changes to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1110) {
        setIsMobileMenuOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    
    // Check on initial load
    handleResize();

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (isMobileMenuOpen && headerRef.current && !headerRef.current.contains(event.target)) {
        setIsMobileMenuOpen(false);
      }
    };

    if (isMobileMenuOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isMobileMenuOpen]);

  return (
    <header className={styles.header} ref={headerRef}>
      <div className={styles.headerContent}>
        <div className={styles.leftSection}>
          <button 
            className={styles.menuButton}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={isMobileMenuOpen}
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

      <CartModal 
        isOpen={isCartOpen} 
        onClose={() => setIsCartOpen(false)} 
      />
    </header>
  );
} 