import Navbar from "../components/common/layout/Navbar";
import Hero from "../components/home/Hero";
import TrustStrip from "../components/home/TrustStrip";
import Categories from "../components/home/Categories";
import BestSelling from "../components/home/BestSelling";


export default function Home() {
  return (
    <>
      <Navbar />
<main>
        <Hero />
        <TrustStrip />
        <Categories />
        <BestSelling />
      </main>
    </>
  );
}