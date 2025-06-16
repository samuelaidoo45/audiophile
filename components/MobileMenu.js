"use client";

import Image from 'next/image';
import Link from 'next/link';
import styles from './MobileMenu.module.css';
import Categories from './Categories';

export default function MobileMenu({ onClose }) {
  return (
    <div className={styles.mobileMenuOverlay}>
      <div className={styles.mobileMenu}>
        <div className={styles.menuContent}>
          <Categories />
        </div>
      </div>
      <div className={styles.overlay} onClick={onClose} />
    </div>
  );
} 