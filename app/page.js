import Image from "next/image";
import Hero from "../components/Hero";
import Categories from "../components/Categories";

export default function HomePage() {
  return (
    <main>
      <Hero />
      <Categories />
    </main>
  );
}
