import styles from './FeaturedSpeaker.module.css';
import Image from 'next/image';
import Link from 'next/link';

export default function FeaturedSpeaker() {
  return (
    <div className={styles.featuredWrapper}>
      <section className={styles.featured}>
        <div className={styles.container}>
          <div className={styles.imageWrapper}>
            <Image
              src="/assets/home/mobile/image-speaker-zx9.png"
              alt="ZX9 Speaker"
              width={172}
              height={207}
              className={styles.image}
            />
          </div>
          <div className={styles.content}>
            <h2 className={styles.title}>
              ZX9<br />
              SPEAKER
            </h2>
            <p className={styles.description}>
              Upgrade to premium speakers that are phenomenally built to deliver truly remarkable sound.
            </p>
            <Link href="/speakers/zx9-speaker" className={styles.button}>
              SEE PRODUCT
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
} 