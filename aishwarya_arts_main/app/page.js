import BestSellers from "./components/HomePage/BestSellers";
import Hero from "./components/HomePage/Hero";
import Tooltip from "./components/HomePage/Tooltip";


export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center">
      <Hero/>
      <Tooltip/>
      <BestSellers/>
    </main>
  );
}
