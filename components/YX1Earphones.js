import styles from './YX1Earphones.module.css';

export default function YX1Earphones() {
  return (
    <div className={styles.yx1Wrapper}>
      <section className={styles.yx1Section}>
        <div className={styles.imageContainer}>
          <div className={styles.image} />
        </div>
        <div className={styles.contentContainer}>
          <h2 className={styles.title}>YX1 EARPHONES</h2>
          <button className={styles.button}>SEE PRODUCT</button>
        </div>
      </section>
    </div>
  );
} 