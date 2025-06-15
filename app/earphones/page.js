import styles from './page.module.css';
import Categories from '@/components/Categories';
import BestGear from '@/components/BestGear';
import Footer from '@/components/Footer';
import EarphonesList from '@/components/EarphonesList';

export default function Earphones() {
  return (
    <main>
      <section className={styles.header}>
        <h1>EARPHONES</h1>
      </section>
      <EarphonesList />
      <Categories />
      <BestGear />
      <Footer />
    </main>
  );
} 