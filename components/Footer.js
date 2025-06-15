'use client';

import styles from './Footer.module.css';
import Image from 'next/image';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.orangeLine}></div>
        <div className={styles.content}>
          <Image
            src="/assets/shared/desktop/logo.svg"
            alt="Audiophile logo"
            width={143}
            height={25}
            className={styles.logo}
          />
          
          <nav className={styles.nav}>
            <Link href="/" className={styles.link}>HOME</Link>
            <Link href="/headphones" className={styles.link}>HEADPHONES</Link>
            <Link href="/speakers" className={styles.link}>SPEAKERS</Link>
            <Link href="/earphones" className={styles.link}>EARPHONES</Link>
          </nav>

          <p className={styles.description}>
            Audiophile is an all in one stop to fulfill your audio needs. We're a small team 
            of music lovers and sound specialists who are devoted to helping you get the 
            most out of personal audio. Come and visit our demo facility - we're open 
            7 days a week.
          </p>

          <div className={styles.bottom}>
            <p className={styles.copyright}>
              Copyright 2021. All Rights Reserved
            </p>

            <div className={styles.socialLinks}>
              <Link href="https://facebook.com" className={styles.socialLink}>
                <Image
                  src="/assets/shared/desktop/icon-facebook.svg"
                  alt="Facebook"
                  width={24}
                  height={24}
                />
              </Link>
              <Link href="https://twitter.com" className={styles.socialLink}>
                <Image
                  src="/assets/shared/desktop/icon-twitter.svg"
                  alt="Twitter"
                  width={24}
                  height={24}
                />
              </Link>
              <Link href="https://instagram.com" className={styles.socialLink}>
                <Image
                  src="/assets/shared/desktop/icon-instagram.svg"
                  alt="Instagram"
                  width={24}
                  height={24}
                />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
} 