"use client";
import { Button } from "@/components/shadcn-ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  SheetFooter,
  SheetClose,
} from "@/components/shadcn-ui/sheet";
import { Input } from "@/components/shadcn-ui/input";

import Image from "next/image";
import logoImage from "@/assets/logo.svg";
// import { Sheet } from "lucide-react";

export default function Home() {
  function copy(copyText: string) {
    navigator.clipboard.writeText(copyText);
    alert("Copied!");
  }
  // 仮のurl
  const copyText = `[![LGTMeow](https://lgtm-images.lgtmeow.com/2022/05/10/23/8bb2a459-a0b5-4acc-970c-69ad8808f905.webp)](https://lgtmeow.com)`;
  const url = "/api/v1/lgtm-images?theme=test";
  return (
    <main className="p-16">
      <Sheet>
        <SheetTrigger>Open</SheetTrigger>
        <SheetContent className="flex flex-col gap-y-8 p-10">
          <SheetHeader>
            <SheetTitle>Theme: Summer Sea</SheetTitle>
            <ul>
              <li>Perfect for code reviews in August!</li>
              <li>color: </li>
              <li>author: kagome</li>
            </ul>
          </SheetHeader>
          <div className="h-[200px] w-full rounded-sm bg-indigo-500"></div>
          <div className="flex gap-x-4">
            <Button onClick={() => copy(copyText)} className="flex-1">
              copy
            </Button>
            <Button asChild className="flex-1">
              <a href={url} download="lgtm-image">
                download
              </a>
            </Button>
          </div>
          <div className="mt-auto space-y-4">
            <Input type="text" placeholder="Text" />
            <SheetFooter>
              <SheetClose asChild>
                <Button className="w-full">Save changes</Button>
              </SheetClose>
            </SheetFooter>
          </div>
        </SheetContent>
      </Sheet>
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
