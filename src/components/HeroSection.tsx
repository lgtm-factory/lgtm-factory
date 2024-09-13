import Image from "next/image";
import heroImage from "../../public/logo.svg";

export default function HeroSection() {
  return (
    <section className="flex items-end justify-between">
      <div className="leading-none text-white">
        <h1 className="flex items-baseline font-monoton">
          <span className="text-5xl sm:text-[8vw]">LGTM</span>
          <span className="ml-1 text-3xl sm:text-[calc(8vw*4/7)]">Factory</span>
        </h1>
        <p className="text-sm font-medium sm:text-[1.6vw]">
          LGTM make code review more fun! 👍
        </p>
      </div>
      <div className="relative hidden md:block">
        <Image
          src={heroImage}
          alt="Hero image"
          className="-z-10 w-[20vw] -translate-y-0.5 -scale-x-100 opacity-75"
        />
      </div>
    </section>
  );
}
