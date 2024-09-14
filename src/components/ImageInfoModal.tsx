import Image from "next/image";
import { siteMetadata } from "@/lib/constants";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/shadcn-ui/sheet";
import ImageForm from "./ImageForm";

async function ImageInfoModal({ theme }: { theme: string }) {
  const response = await fetch(
    `${siteMetadata.SITE_URL}/api/v1/design-info?theme=${theme}`,
  );
  const { designInfo: info } = await response.json();

  return (
    <Sheet>
      <SheetTrigger>
        <div className="flex h-full w-full cursor-pointer items-center hover:opacity-80 sm:aspect-square">
          <Image
            width={1200}
            height={630}
            src={`${siteMetadata.SITE_URL}/api/v1/lgtm-images?theme=${theme}`}
            alt={theme}
            className="max-h-full max-w-full object-contain"
          />
        </div>
      </SheetTrigger>
      <SheetContent className="space-y-8 p-10">
        <SheetHeader>
          <SheetTitle>{theme}</SheetTitle>
          <ul>
            <li>desc: {info?.description}</li>
            <li>author: {info?.author}</li>
            <li>editableFields: {info?.editableFields?.join(", ")}</li>
          </ul>
        </SheetHeader>
        <ImageForm theme={theme} info={info} />
      </SheetContent>
    </Sheet>
  );
}

export default ImageInfoModal;
