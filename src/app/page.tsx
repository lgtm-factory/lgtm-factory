"use client";

import Image from "next/image";
import logoImage from "@/assets/logo.svg";
import EditSheet from "@/components/EditSheet";
// import { Sheet } from "lucide-react";

export default function Home() {
  return (
    <main className="p-16">
      <EditSheet />
      <div className="text-4xl">
        <Image src={logoImage} width={180} alt="logo image" />
        <p className="font-monoton text-accent">LGTM Factory</p>
        <p className="font-thin">LGTM良さそうだね</p>
        <p className="font-bold">LGTM良さそうだね</p>
        {/* <p className="font-monoton text-accent">LGTM Factory</p>
        <p className="font-thin">LGTM良さそうだね</p>
        <p className="font-bold">LGTM良さそうだね</p>
        <p className="font-monoton text-accent">LGTM Factory</p>
        <p className="font-thin">LGTM良さそうだね</p>
        <p className="font-bold">LGTM良さそうだね</p>
        <p className="font-monoton text-accent">LGTM Factory</p>
        <p className="font-thin">LGTM良さそうだね</p>
        <p className="font-bold">LGTM良さそうだね</p>
        <p className="font-monoton text-accent">LGTM Factory</p>
        <p className="font-thin">LGTM良さそうだね</p>
        <p className="font-bold">LGTM良さそうだね</p>
        <p className="font-monoton text-accent">LGTM Factory</p>
        <p className="font-thin">LGTM良さそうだね</p>
        <p className="font-bold">LGTM良さそうだね</p>
        <p className="font-monoton text-accent">LGTM Factory</p>
        <p className="font-thin">LGTM良さそうだね</p>
        <p className="font-bold">LGTM良さそうだね</p>
        <p className="font-monoton text-accent">LGTM Factory</p>
        <p className="font-thin">LGTM良さそうだね</p>
        <p className="font-bold">LGTM良さそうだね</p>
        <p className="font-monoton text-accent">LGTM Factory</p>
        <p className="font-thin">LGTM良さそうだね</p>
        <p className="font-bold">LGTM良さそうだね</p>
        <p className="font-monoton text-accent">LGTM Factory</p>
        <p className="font-thin">LGTM良さそうだね</p>
        <p className="font-bold">LGTM良さそうだね</p>
        <p className="font-monoton text-accent">LGTM Factory</p>
        <p className="font-thin">LGTM良さそうだね</p>
        <p className="font-bold">LGTM良さそうだね</p>
        <p className="font-monoton text-accent">LGTM Factory</p>
        <p className="font-thin">LGTM良さそうだね</p>
        <p className="font-bold">LGTM良さそうだね</p>
        <p className="font-monoton text-accent">LGTM Factory</p>
        <p className="font-thin">LGTM良さそうだね</p>
        <p className="font-bold">LGTM良さそうだね</p>
        <p className="font-monoton text-accent">LGTM Factory</p>
        <p className="font-thin">LGTM良さそうだね</p>
        <p className="font-bold">LGTM良さそうだね</p>
        <p className="font-monoton text-accent">LGTM Factory</p>
        <p className="font-thin">LGTM良さそうだね</p>
        <p className="font-bold">LGTM良さそうだね</p>
        <p className="font-monoton text-accent">LGTM Factory</p>
        <p className="font-thin">LGTM良さそうだね</p>
        <p className="font-bold">LGTM良さそうだね</p> */}
      </div>
    </main>
  );
}
