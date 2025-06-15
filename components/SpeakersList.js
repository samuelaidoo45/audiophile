"use client";

import Image from 'next/image';
import Link from 'next/link';
import styles from './SpeakersList.module.css';

const SpeakersList = () => {
  const products = [
    {
      name: "ZX9 SPEAKER",
      description: "Upgrade your sound system with the all new ZX9 active speaker. It's a bookshelf speaker system that offers truly wireless connectivity -- creating new possibilities for more pleasing and practical audio setups.",
      image: "/assets/shared/mobile/image-zx9-speaker.jpg",
      link: "/speakers/zx9",
      isNew: true
    },
    {
      name: "ZX7 SPEAKER",
      description: "Stream high quality sound wirelessly with minimal loss. The ZX7 bookshelf speaker uses high-end audiophile components that represents the top of the line powered speakers for home or studio use.",
      image: "/assets/shared/mobile/image-zx7-speaker.jpg",
      link: "/speakers/zx7",
      isNew: false
    }
  ];

  return (
    <section className={styles.productList}>
      {products.map((product, index) => (
        <div key={index} className={styles.productCard}>
          <div className={styles.imageContainer}>
            <Image
              src={product.image}
              alt={product.name}
              width={327}
              height={352}
              className={styles.productImage}
            />
          </div>
          <div className={styles.productInfo}>
            {product.isNew && <span className={styles.newProduct}>NEW PRODUCT</span>}
            <h2 className={styles.productName}>{product.name}</h2>
            <p className={styles.productDescription}>{product.description}</p>
            <Link href={product.link} className={styles.seeProductButton}>
              SEE PRODUCT
            </Link>
          </div>
        </div>
      ))}
    </section>
  );
};

export default SpeakersList; 