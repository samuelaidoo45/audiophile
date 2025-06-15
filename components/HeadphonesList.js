"use client";

import Image from 'next/image';
import Link from 'next/link';
import styles from './HeadphonesList.module.css';

const HeadphonesList = () => {
  const products = [
    {
      name: "XX99 MARK II HEADPHONES",
      description: "The new XX99 Mark II headphones is the pinnacle of pristine audio. It redefines your premium headphone experience by reproducing the balanced depth and precision of studio-quality sound.",
      image: "/assets/shared/desktop/image-xx99-mark-two-headphones.jpg",
      link: "/headphones/xx99-mark-two",
      isNew: true
    },
    {
      name: "XX99 MARK I HEADPHONES",
      description: "As the gold standard for headphones, the classic XX99 Mark I offers detailed and accurate audio reproduction for audiophiles, mixing engineers, and music enthusiasts alike.",
      image: "/assets/shared/desktop/image-xx99-mark-one-headphones.jpg",
      link: "/headphones/xx99-mark-one",
      isNew: false
    },
    {
      name: "XX59 HEADPHONES",
      description: "Enjoy your audio almost anywhere and customize it to your specific tastes with the XX59 headphones. The stylish yet durable versatile wireless headset is a brilliant companion at home or on the move.",
      image: "/assets/shared/mobile/image-xx59-headphones.jpg",
      link: "/headphones/xx59",
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

export default HeadphonesList; 