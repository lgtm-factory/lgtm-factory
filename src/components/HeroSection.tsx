import Image from "next/image";
import heroImage from "@/assets/logo.svg";

export default function HeroSection() {
  return (
    <section className="relative">
      <h1 className="flex flex-col font-monoton leading-none text-white">
        <span className="text-[20vw]">LGTM</span>
        <span className="-translate-y-4 text-[calc(20vw*4/7)]">Factory</span>
      </h1>
      <Image
        src={heroImage}
        alt="Hero image"
        className="absolute right-[2rem] top-[4.5vw] -z-10 w-[40vw] opacity-75"
      />
    </section>
  );
}
