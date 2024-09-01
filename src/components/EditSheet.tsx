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

export default function EditSheet() {
  function copy(copyText: string) {
    navigator.clipboard.writeText(copyText);
    alert("Copied!");
  }
  // 仮のurl
  const copyText = `[![LGTMeow](https://lgtm-images.lgtmeow.com/2022/05/10/23/8bb2a459-a0b5-4acc-970c-69ad8808f905.webp)](https://lgtmeow.com)`;
  const url = "/api/v1/lgtm-images?theme=test";
  const share_url =
    "https://twitter.com/intent/tweet?text=自由自在なフリーLGTM画像で、プロジェクトを彩る📦&url=https://github.com/lgtm-factory/lgtm-factory&hashtags=LGTMfactory,OpenSource ”Tweet this project”";
  return (
    <Sheet>
      <SheetTrigger>
        <div className="h-[200px] w-[300px] rounded-sm bg-white bg-opacity-50"></div>
      </SheetTrigger>
      <SheetContent className="space-y-8 p-10">
        <SheetHeader>
          <SheetTitle>Theme: Summer Sea</SheetTitle>
          <ul>
            <li>Perfect for code reviews in August!</li>
            <li>color: </li>
            <li>author: kagome</li>
          </ul>
        </SheetHeader>
        <div className="h-[200px] w-full rounded-sm bg-black bg-opacity-30"></div>
        <div className="flex gap-4">
          <Button onClick={() => copy(copyText)} className="flex-1">
            copy
          </Button>
          <Button asChild className="flex-1">
            <a href={url} download="lgtm-image">
              download
            </a>
          </Button>
        </div>
        <Button asChild>
          <a href={share_url} target="_blank">
            Share X
          </a>
        </Button>
        <div className="space-y-4">
          <Input type="text" placeholder="Text" />
          <SheetFooter>
            <SheetClose asChild>
              <Button className="w-full">Save changes</Button>
            </SheetClose>
          </SheetFooter>
        </div>
      </SheetContent>
    </Sheet>
  );
}
