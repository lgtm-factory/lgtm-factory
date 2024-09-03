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
import LgtmImage from "@/components/LgtmImage";
import { siteMetadata } from "@/lib/constants";
import { DesignInfo } from "@/types/lgtm-data";

function ImageInfoModal({
  children,
  theme,
  info,
}: {
  children: React.ReactNode;
  theme: string;
  info: DesignInfo;
}) {
  const url = `${siteMetadata.SITE_URL}/api/v1/lgtm-images?theme=${theme}`;

  return (
    <Sheet>
      <SheetTrigger>{children}</SheetTrigger>
      <SheetContent className="space-y-8 p-10">
        <SheetHeader>
          <SheetTitle>{theme}</SheetTitle>
          <ul>
            <li>desc: {info?.description}</li>
            <li>author: {info?.author}</li>
            <li>editableFields: {info?.editableFields?.join(", ")}</li>
          </ul>
        </SheetHeader>
        <LgtmImage theme={theme} />
        <div className="flex gap-4">
          <CopyButton url={url} />
          <DownloadButton url={url} />
        </div>
        <ShareButton />
        <EditArea />
      </SheetContent>
    </Sheet>
  );
}

export default ImageInfoModal;
