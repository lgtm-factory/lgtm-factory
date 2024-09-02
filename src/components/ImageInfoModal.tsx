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

async function ImageInfoModal({
  children,
  theme,
}: {
  children: React.ReactNode;
  theme: string;
}) {
  const url = `${siteMetadata.SITE_URL}/api/v1/lgtm-images?theme=${theme}`;

  const response = await fetch(
    `${siteMetadata.SITE_URL}/api/v1/design-info?theme=${theme}`,
  );
  const { designInfo } = await response.json();

  return (
    <Sheet>
      <SheetTrigger>{children}</SheetTrigger>
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
