import AboutSection from "./components/HomePage/AboutSection";
import BestSellers from "./components/HomePage/BestSellers";
import FeaturedProducts from "./components/HomePage/FeaturedProducts";
import Hero from "./components/HomePage/Hero";
import Story from "./components/HomePage/Story";
import Tooltip from "./components/HomePage/Tooltip";


export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center">
      <Hero/>
      <Tooltip/>
      <Story/>
      <BestSellers/>
      <AboutSection/>
      <FeaturedProducts/>
    </main>
  );
}
