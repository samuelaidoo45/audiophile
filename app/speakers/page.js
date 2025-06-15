"use client";

import Header from '../../components/Header';
import SpeakersList from '../../components/SpeakersList';
import Categories from '../../components/Categories';
import BestGear from '../../components/BestGear';
import Footer from '../../components/Footer';
import styles from './page.module.css';

export default function SpeakersPage() {
  return (
    <main className={styles.main}>
      <Header />
      <section className={styles.categoryHeader}>
        <div className={styles.overlay}>
          <h1 className={styles.title}>SPEAKERS</h1>
        </div>
      </section>
      <SpeakersList />
      <Categories />
      <BestGear />
      <Footer />
    </main>
  );
} 