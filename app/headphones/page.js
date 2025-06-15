"use client";

import Header from '../../components/Header';
import HeadphonesList from '../../components/HeadphonesList';
import Categories from '../../components/Categories';
import BestGear from '../../components/BestGear';
import Footer from '../../components/Footer';
import styles from './page.module.css';

export default function HeadphonesPage() {
  return (
    <main className={styles.main}>
      <Header />
      <section className={styles.categoryHeader}>
        <div className={styles.overlay}>
          <h1 className={styles.title}>HEADPHONES</h1>
        </div>
      </section>
      <HeadphonesList />
      <Categories />
      <BestGear />
      <Footer />
    </main>
  );
} 