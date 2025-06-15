import styles from './BestGear.module.css';
import Image from 'next/image';

export default function BestGear() {
  return (
    <div className={styles.wrapper}>
      <section className={styles.container}>
        <div className={styles.imageContainer}>
          <Image
            src="/assets/shared/mobile/image-best-gear.jpg"
            alt="Man wearing headphones"
            width={327}
            height={300}
            className={styles.image}
          />
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