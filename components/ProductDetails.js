"use client";

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import styles from './ProductDetails.module.css';
import data from '../data/data.json';
import Categories from './Categories';
import BestGear from './BestGear';
import Footer from './Footer';
import CartModal from './CartModal';

const ProductDetails = ({ slug }) => {
  const router = useRouter();
  const [quantity, setQuantity] = useState(1);
  const [currentProduct, setCurrentProduct] = useState(null);
  const [isCartOpen, setIsCartOpen] = useState(false);

  useEffect(() => {
    // Reset quantity when product changes
    setQuantity(1);
    // Find and set the current product
    const product = data.find((item) => item.slug === slug);
    setCurrentProduct(product);
    // Scroll to top when product changes
    window.scrollTo(0, 0);
  }, [slug]);

  const handleQuantityChange = (change) => {
    const newQuantity = quantity + change;
    if (newQuantity >= 1) {
      setQuantity(newQuantity);
    }
  };

  const addToCart = () => {
    const cartItem = {
      id: currentProduct.id,
      name: currentProduct.name,
      price: currentProduct.price,
      image: currentProduct.image.mobile.replace('./assets/', '/assets/'),
      quantity: quantity
    };

    // Get existing cart from localStorage
    const existingCart = JSON.parse(localStorage.getItem('cart') || '[]');
    
    // Check if item already exists in cart
    const existingItemIndex = existingCart.findIndex(item => item.id === cartItem.id);
    
    if (existingItemIndex >= 0) {
      // Update quantity if item exists
      existingCart[existingItemIndex].quantity += quantity;
    } else {
      // Add new item if it doesn't exist
      existingCart.push(cartItem);
    }
    
    // Save updated cart to localStorage
    localStorage.setItem('cart', JSON.stringify(existingCart));
    
    // Dispatch custom event for cart updates
    window.dispatchEvent(new Event('cartUpdated'));

    // Reset quantity
    setQuantity(1);

    // Show cart modal
    setIsCartOpen(true);
  };

  if (!currentProduct) {
    return <div>Product not found</div>;
  }

  const handleProductNavigation = (productSlug) => {
    // Find the product in the main data array to get its category
    const product = data.find((item) => item.slug === productSlug);
    if (product) {
      router.push(`/${product.category}/${productSlug}`);
    }
  };

  return (
    <div className={styles.pageWrapper}>
      <div className={styles.container}>
        <button 
          onClick={() => router.back()} 
          className={styles.goBack}
        >
          Go Back
        </button>

        <div className={styles.mainSection}>
          <div className={styles.productImage}>
            <picture>
              <source media="(min-width: 1024px)" srcSet={currentProduct.image.desktop.replace('./', '/')} />
              <source media="(min-width: 768px)" srcSet={currentProduct.image.tablet.replace('./', '/')} />
              <Image
                src={currentProduct.image.mobile.replace('./', '/')}
                alt={currentProduct.name}
                width={540}
                height={560}
                priority
                className={styles.responsiveImage}
              />
            </picture>
          </div>
          <div className={styles.productInfo}>
            {currentProduct.new && <span className={styles.newProduct}>NEW PRODUCT</span>}
            <h1 className={styles.productName}>{currentProduct.name}</h1>
            <p className={styles.description}>{currentProduct.description}</p>
            <p className={styles.price}>$ {currentProduct.price.toLocaleString()}</p>
            <div className={styles.addToCart}>
              <div className={styles.quantity}>
                <button 
                  className={styles.quantityBtn} 
                  onClick={() => handleQuantityChange(-1)}
                >
                  -
                </button>
                <span>{quantity}</span>
                <button 
                  className={styles.quantityBtn}
                  onClick={() => handleQuantityChange(1)}
                >
                  +
                </button>
              </div>
              <button 
                className={styles.addToCartBtn}
                onClick={addToCart}
              >
                ADD TO CART
              </button>
            </div>
          </div>
        </div>

        <div className={styles.featureSection}>
          <div className={styles.features}>
            <h2>FEATURES</h2>
            <p>{currentProduct.features}</p>
          </div>

          <div className={styles.inTheBox}>
            <h2>IN THE BOX</h2>
            <ul>
              {currentProduct.includes.map((item, index) => (
                <li key={index}>
                  <span className={styles.itemQuantity}>{item.quantity}x</span>
                  <span className={styles.itemName}>{item.item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className={styles.gallery}>
          <div className={styles.galleryImage}>
            <picture>
              <source media="(min-width: 1024px)" srcSet={currentProduct.gallery.first.desktop.replace('./', '/')} />
              <source media="(min-width: 768px)" srcSet={currentProduct.gallery.first.tablet.replace('./', '/')} />
              <Image
                src={currentProduct.gallery.first.mobile.replace('./', '/')}
                alt="Gallery image 1"
                fill
                className={styles.responsiveImage}
              />
            </picture>
          </div>
          <div className={styles.galleryImage}>
            <picture>
              <source media="(min-width: 1024px)" srcSet={currentProduct.gallery.second.desktop.replace('./', '/')} />
              <source media="(min-width: 768px)" srcSet={currentProduct.gallery.second.tablet.replace('./', '/')} />
              <Image
                src={currentProduct.gallery.second.mobile.replace('./', '/')}
                alt="Gallery image 2"
                fill
                className={styles.responsiveImage}
              />
            </picture>
          </div>
          <div className={styles.galleryImage}>
            <picture>
              <source media="(min-width: 1024px)" srcSet={currentProduct.gallery.third.desktop.replace('./', '/')} />
              <source media="(min-width: 768px)" srcSet={currentProduct.gallery.third.tablet.replace('./', '/')} />
              <Image
                src={currentProduct.gallery.third.mobile.replace('./', '/')}
                alt="Gallery image 3"
                fill
                className={styles.responsiveImage}
              />
            </picture>
          </div>
        </div>

        <div className={styles.suggestions}>
          <h2>YOU MAY ALSO LIKE</h2>
          <div className={styles.suggestionsGrid}>
            {currentProduct.others.map((item, index) => (
              <div key={index} className={styles.suggestionCard}>
                <div className={styles.suggestionImage}>
                  <picture>
                    <source media="(min-width: 1024px)" srcSet={item.image.desktop.replace('./assets/', '/assets/')} />
                    <source media="(min-width: 768px)" srcSet={item.image.tablet.replace('./assets/', '/assets/')} />
                    <Image
                      src={item.image.mobile.replace('./assets/', '/assets/')}
                      alt={item.name}
                      width={350}
                      height={318}
                      className={styles.responsiveImage}
                    />
                  </picture>
                </div>
                <h3>{item.name}</h3>
                <button 
                  onClick={() => handleProductNavigation(item.slug)}
                  className={styles.seeProductBtn}
                >
                  SEE PRODUCT
                </button>
              </div>
            ))}
          </div>
        </div>

        <Categories />
        <BestGear />
      </div>
      <Footer />
      
      <CartModal 
        isOpen={isCartOpen} 
        onClose={() => setIsCartOpen(false)} 
      />
    </div>
  );
};

export default ProductDetails; 