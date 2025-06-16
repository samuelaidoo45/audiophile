import styles from './FeaturedSpeaker.module.css';
import Image from 'next/image';
import Link from 'next/link';

export default function FeaturedSpeaker() {
  return (
    <div className={styles.featuredWrapper}>
      <section className={styles.featured}>
        <div className={styles.container}>
          <div className={styles.imageWrapper}>
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
                className={styles.image}
                sizes="(min-width: 1110px) 410px, (min-width: 768px) 197px, 172px"
              />
            </picture>
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