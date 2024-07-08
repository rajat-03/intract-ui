import CardsContainer from "@/components/home/CardsContainer";
import EssentialsSection from "@/components/home/EssentialsSection";
import Footer from "@/components/home/Footer";
import HeroSection from "@/components/home/HeroSection";
import Intercom from "@/components/home/Intercom";
import Navbar from "@/components/home/Navbar";

export default function Home() {
  return (
    <>
      <Navbar />
      <div className="overflow-x-hidden">
        <HeroSection />
        <EssentialsSection />
        <CardsContainer />
        <Footer />
        <Intercom />
      </div>
    </>
  );
}
