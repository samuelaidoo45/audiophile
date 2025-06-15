import styles from './BestGear.module.css';
import Image from 'next/image';

export default function BestGear() {
  return (
    <div className={styles.wrapper}>
      <section className={styles.container}>
        <div className={styles.imageContainer}>
          <picture>
            <source 
              media="(min-width: 1110px)" 
              srcSet="/assets/shared/desktop/image-best-gear.jpg"
            />
            <source 
              media="(min-width: 768px)" 
              srcSet="/assets/shared/tablet/image-best-gear.jpg"
            />
            <Image
              src="/assets/shared/mobile/image-best-gear.jpg"
              alt="Man wearing headphones"
              fill
              sizes="(min-width: 1110px) 540px, (min-width: 768px) 689px, 327px"
              className={styles.image}
              priority
            />
          </picture>
        </div>
        <div className={styles.content}>
          <h2 className={styles.title}>
            BRINGING YOU THE<br />
            <span className={styles.highlight}>BEST</span> AUDIO GEAR
          </h2>
          <p className={styles.description}>
            Located at the heart of New York City, Audiophile is the premier store for high end headphones, 
            earphones, speakers, and audio accessories. We have a large showroom and luxury demonstration 
            rooms available for you to browse and experience a wide range of our products. Stop by our store 
            to meet some of the fantastic people who make Audiophile the best place to buy your portable 
            audio equipment.
          </p>
        </div>
      </section>
    </div>
  );
} 