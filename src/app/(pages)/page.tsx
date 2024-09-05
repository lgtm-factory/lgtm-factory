import HeroSection from "@/components/HeroSection";
import MainSection from "@/components/MainSection";

export default function Home() {
  return (
    <>
      <div className="my-16 space-y-16 md:my-20 md:space-y-20 lg:my-32 lg:space-y-32">
        <HeroSection />
        <MainSection />
      </div>
    </>
  );
}
