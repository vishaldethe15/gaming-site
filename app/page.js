import Navbar from "./components/Navbar";
import HeroSection from "./components/Hero";

const HomePage = () => {
  return (
    <div className="pb-4 sm:pb-8 lg:pb-12">
      <div className="mx-auto max-w-screen-2xl px-4 md:px-8">
        <Navbar />
        <HeroSection />
      </div>
    </div>
  );
};

export default HomePage;
