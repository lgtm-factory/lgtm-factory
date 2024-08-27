import Image from "next/image";
import logoImage from "@/assets/logo.svg";

export default function Footer() {
  return (
    <footer className="flex h-20 items-center justify-end gap-4 px-8 text-lg font-medium">
      <Image
        src={logoImage}
        alt="logo image"
        width={40}
        className="-scale-x-100"
      />
      <span>LGTM Factory</span>
    </footer>
  );
}
