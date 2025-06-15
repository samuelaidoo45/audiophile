import styles from './FeaturedSpeaker.module.css';

export default function ZX7Speaker() {
  return (
    <div className={styles.zx7Wrapper}>
      <section className={styles.zx7Section}>
        <div className={styles.zx7Content}>
          <h2 className={styles.zx7Title}>ZX7 SPEAKER</h2>
          <button className={styles.zx7Button}>SEE PRODUCT</button>
        </div>
      </section>
    </div>
  );
} 