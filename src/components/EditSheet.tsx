"use client";

import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/shadcn-ui/sheet";
import CopyButton from "@/components/CopyButton";
import DownloadButton from "@/components/DownloadButton";
import ShareButton from "@/components/ShareButton";
import EditArea from "@/components/EditArea";
import { useEffect, useState } from "react";
import { getDesignInfo } from "@/actions/getDesignInfo";
import LgtmImage from "@/components/LgtmImage";
import { DesignInfo } from "@/types/lgtm-data";

export default function EditSheet({ theme }: { theme: string }) {
  const [designInfo, setDesignInfo] = useState<DesignInfo | null>(null);

  useEffect(() => {
    theme &&
      (async () => {
        const info = await getDesignInfo(theme);
        setDesignInfo(info);
      })();
  }, []);

  return (
    <Sheet>
      <SheetTrigger>
        <LgtmImage theme={theme} className="cursor-pointer" />
      </SheetTrigger>
      <SheetContent className="space-y-8 p-10">
        <SheetHeader>
          <SheetTitle>{theme}</SheetTitle>
          <ul>
            <li>desc: {designInfo?.description}</li>
            <li>author: {designInfo?.author}</li>
            <li>editableFields: {designInfo?.editableFields.join(", ")}</li>
          </ul>
        </SheetHeader>
        <LgtmImage theme={theme} />
        <div className="flex gap-4">
          <CopyButton copyText="test copy text" />
          <DownloadButton url="test download url" />
        </div>
        <ShareButton />
        <EditArea />
      </SheetContent>
    </Sheet>
  );
}
