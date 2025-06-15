import Image from "next/image";
import Hero from '@/components/Hero';
import Categories from '@/components/Categories';
import FeaturedSpeaker from '@/components/FeaturedSpeaker';
import ZX7Speaker from '@/components/ZX7Speaker';
import YX1Earphones from '@/components/YX1Earphones';
import BestGear from '@/components/BestGear';
import Footer from '@/components/Footer';

export default function HomePage() {
  return (
    <>
      <main>
        <Hero />
        <Categories />
        <FeaturedSpeaker />
        <ZX7Speaker />
        <YX1Earphones />
        <BestGear />
      </main>
      <Footer />
    </>
  );
}
