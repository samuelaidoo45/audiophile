import styles from './Hero.module.css';

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.heroImage} />
      <div className={styles.heroContent}>
        <div className={styles.heroText}>
          <p className={styles.newProduct}>NEW PRODUCT</p>
          <h1 className={styles.title}>
            XX99 MARK II
            <br />
            HEADPHONES
          </h1>
          <p className={styles.description}>
            Experience natural, lifelike audio and exceptional build quality made for the passionate music enthusiast.
          </p>
          <button className={styles.ctaButton}>
            SEE PRODUCT
          </button>
        </div>
      </div>
    </section>
  );
} 