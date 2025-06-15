import styles from './Categories.module.css';
import Image from 'next/image';

export default function Categories() {
  const categories = [
    {
      name: 'HEADPHONES',
      image: '/assets/cart/image-xx99-mark-one-headphones.jpg'
    },
    {
      name: 'SPEAKERS',
      image: '/assets/cart/image-zx9-speaker.jpg'
    },
    {
      name: 'EARPHONES',
      image: '/assets/cart/image-yx1-earphones.jpg'
    }
  ];

  return (
    <section className={styles.categories}>
      <div className={styles.container}>
        {categories.map((category, index) => (
          <div key={index} className={styles.category}>
            <div className={styles.imageWrapper}>
              <Image
                src={category.image}
                alt={category.name}
                width={150}
                height={150}
                className={styles.image}
              />
            </div>
            <h2 className={styles.name}>{category.name}</h2>
            <button className={styles.shopButton}>
              SHOP
              <svg width="8" height="12" xmlns="http://www.w3.org/2000/svg">
                <path d="M1.322 1l5 5-5 5" stroke="#D87D4A" strokeWidth="2" fill="none"/>
              </svg>
            </button>
          </div>
        ))}
      </div>
    </section>
  );
} 