import Image from "next/image";
import Hero from '../components/Hero';
import Categories from '../components/Categories';
import FeaturedProducts from '../components/FeaturedProducts';
import BestGear from '../components/BestGear';
import Footer from '../components/Footer';

export default function HomePage() {
  return (
    <>
      <main>
        <Hero />
        <Categories />
        <FeaturedProducts />
        <BestGear />
      </main>
      <Footer />
    </>
  );
}
