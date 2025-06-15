import styles from './FeaturedSpeaker.module.css';
import Link from 'next/link';

export default function ZX7Speaker() {
  return (
    <div className={styles.zx7Wrapper}>
      <section className={styles.zx7Section}>
        <div className={styles.zx7Content}>
          <h2 className={styles.zx7Title}>ZX7 SPEAKER</h2>
          <Link href="/speakers/zx7-speaker" className={styles.zx7Button}>
            SEE PRODUCT
          </Link>
        </div>
      </section>
    </div>
  );
} 