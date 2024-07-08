import AllSection from "@/components/AllSection";
import CardsContainer from "@/components/CardsContainer";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <>
      <Navbar />
      <div className="overflow-x-hidden">
        <HeroSection />
        <AllSection />
        <CardsContainer />
        <Footer />
      </div>
    </>
  );
}
