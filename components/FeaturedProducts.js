import styles from './FeaturedProducts.module.css';
import Image from 'next/image';
import Link from 'next/link';
import YX1Earphones from './YX1Earphones';

export default function FeaturedProducts() {
  return (
    <section className={styles.featuredProducts}>
      {/* ZX9 Speaker Section */}
      <div className={styles.zx9Section}>
        <div className={styles.zx9Container}>
          <div className={styles.zx9ImageWrapper}>
            <picture>
              <source 
                media="(min-width: 1110px)" 
                srcSet="/assets/home/desktop/image-speaker-zx9.png"
              />
              <source 
                media="(min-width: 768px)" 
                srcSet="/assets/home/tablet/image-speaker-zx9.png"
              />
              <Image
                src="/assets/home/mobile/image-speaker-zx9.png"
                alt="ZX9 Speaker"
                width={410}
                height={493}
                className={styles.zx9Image}
                sizes="(min-width: 1110px) 410px, (min-width: 768px) 197px, 172px"
              />
            </picture>
          </div>
          <div className={styles.zx9Content}>
            <h2 className={styles.zx9Title}>
              ZX9<br />
              SPEAKER
            </h2>
            <p className={styles.zx9Description}>
              Upgrade to premium speakers that are phenomenally built to deliver truly remarkable sound.
            </p>
            <Link href="/speakers/zx9-speaker" className={styles.zx9Button}>
              SEE PRODUCT
            </Link>
          </div>
        </div>
      </div>

      {/* ZX7 Speaker Section */}
      <div className={styles.zx7Section}>
        <div className={styles.zx7Content}>
          <h2 className={styles.zx7Title}>ZX7 SPEAKER</h2>
          <Link href="/speakers/zx7-speaker" className={styles.zx7Button}>
            SEE PRODUCT
          </Link>
        </div>
      </div>

      {/* YX1 Earphones Section */}
      <YX1Earphones />
    </section>
  );
} 