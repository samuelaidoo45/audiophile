import styles from './Header.module.css';

export default function Header() {
  return (
    <header className={styles.header}>
      <button className={styles.menuButton} aria-label="Menu">
        <svg width="16" height="15" viewBox="0 0 16 15" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="16" height="3" fill="white"/>
          <rect y="6" width="16" height="3" fill="white"/>
          <rect y="12" width="16" height="3" fill="white"/>
        </svg>
      </button>
      <div className={styles.logo}>audiophile</div>
      <button className={styles.cartButton} aria-label="Cart">
        <svg width="23" height="20" viewBox="0 0 23 20" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M8.625 15.833c1.132 0 2.054.935 2.054 2.084 0 1.148-.922 2.083-2.054 2.083-1.132 0-2.054-.935-2.054-2.083 0-1.15.922-2.084 2.054-2.084zm9.857 0c1.132 0 2.054.935 2.054 2.084 0 1.148-.922 2.083-2.054 2.083-1.132 0-2.054-.935-2.054-2.083 0-1.15.922-2.084 2.054-2.084zm-9.857 1.39a.69.69 0 00-.685.694.69.69 0 00.685.694.69.69 0 00.685-.694.69.69 0 00-.685-.694zm9.857 0a.69.69 0 00-.684.694.69.69 0 00.684.694.69.69 0 00.685-.694.69.69 0 00-.685-.694zM4.717 0c.316 0 .59.215.658.517l.481 2.122h15.47c.566 0 .755.497.658.817l-1.785 5.818a1.492 1.492 0 01-1.518 1.105H7.41l-.539 2.4c-.091.399.306.717.658.717h8.982a.694.694 0 010 1.388H7.53c-1.32 0-2.257-1.195-2.093-2.491l.847-3.77L2.262 1.5H.694a.694.694 0 010-1.389h2.023z" fill="white"/>
        </svg>
      </button>
    </header>
  );
} 