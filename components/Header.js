"use client";

import Image from 'next/image';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import styles from './Header.module.css';
import MobileMenu from './MobileMenu';
import CartModal from './CartModal';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartItemCount, setCartItemCount] = useState(0);

  useEffect(() => {
    // Update cart count whenever localStorage changes
    const updateCartCount = () => {
      const cart = JSON.parse(localStorage.getItem('cart') || '[]');
      const count = cart.reduce((total, item) => total + item.quantity, 0);
      setCartItemCount(count);
    };

    // Initial count
    updateCartCount();

    // Listen for storage events
    window.addEventListener('storage', updateCartCount);

    // Custom event for cart updates
    window.addEventListener('cartUpdated', updateCartCount);

    return () => {
      window.removeEventListener('storage', updateCartCount);
      window.removeEventListener('cartUpdated', updateCartCount);
    };
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
    if (isCartOpen) setIsCartOpen(false);
  };

  const toggleCart = () => {
    setIsCartOpen(!isCartOpen);
    if (isMobileMenuOpen) setIsMobileMenuOpen(false);
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
        
        <Link href="/" className={styles.logo}>
          <Image
            src="/assets/shared/desktop/logo.svg"
            alt="audiophile"
            width={143}
            height={25}
          />
        </Link>

        <button className={styles.cartButton} onClick={toggleCart}>
          <Image
            src="/assets/shared/desktop/icon-cart.svg"
            alt="Cart"
            width={23}
            height={20}
          />
          {cartItemCount > 0 && (
            <span className={styles.cartCount}>{cartItemCount}</span>
          )}
        </button>
      </div>

      <MobileMenu isOpen={isMobileMenuOpen} onClose={() => setIsMobileMenuOpen(false)} />
      <CartModal isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
    </header>
  );
};

export default Header; 