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
import { DesignInfo } from "@/types/lgtm-data";

async function ImageInfoModal({ theme }: { theme: string }) {
  const response = await fetch(
    `${siteMetadata.SITE_URL}/api/v1/design-info?theme=${theme}`,
  );

  if (!response.ok) {
    throw new Error(`Failed to fetch design info: ${response.statusText}`);
  }
  const designInfo: DesignInfo = await response.json();

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
      <SheetContent className="space-y-4 p-0 pt-8">
        <SheetHeader className="space-y-2 px-4">
          <SheetTitle className="text-2xl font-semibold">{theme}</SheetTitle>
          <p className="text-sm">{designInfo?.description}</p>
        </SheetHeader>
        <ImageForm theme={theme} info={designInfo} />
      </SheetContent>
    </Sheet>
  );
}

export default ImageInfoModal;
