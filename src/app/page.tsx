import HeroSection from "@/components/HeroSection";
import NewLGTMButton from "@/components/NewLGTMButton";
import MainSection from "@/components/MainSection";

export default function Home() {
  return (
    <main className="container">
      <div className="my-16 space-y-16 md:my-20 md:space-y-20 lg:my-32 lg:space-y-32">
        <HeroSection />
        <MainSection />
      </div>
      <NewLGTMButton />
    </main>
  );
}
