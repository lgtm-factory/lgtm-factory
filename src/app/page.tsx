"use client";
import { Button } from "@/components/shadcn-ui/button";
import Image from "next/image";
import logoImage from "@/assets/logo.svg";
import HeroSection from "@/components/HeroSection";
import NewLGTMButton from "@/components/NewLGTMButton";
import MainSection from "@/components/MainSection";

export default function Home() {
  function copy(copyText: string) {
    navigator.clipboard.writeText(copyText);
    alert("Copied!");
  }
  // 仮のurl
  const copyText = `[![LGTMeow](https://lgtm-images.lgtmeow.com/2022/05/10/23/8bb2a459-a0b5-4acc-970c-69ad8808f905.webp)](https://lgtmeow.com)`;
  const url = "/api/v1/lgtm-images?theme=test";
  return (
    <main className="container">
      <div className="my-8 md:my-16">
        <HeroSection />
      </div>
      <div>
        <MainSection />
      </div>
      <NewLGTMButton />
      <Button onClick={() => copy(copyText)}>copy</Button>
      <Button asChild>
        <a href={url} download="lgtm-image">
          download
        </a>
      </Button>
      <div className="text-4xl">
        <Image src={logoImage} width={180} alt="logo image" />
      </div>
    </main>
  );
}
