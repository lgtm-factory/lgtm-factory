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

type ImageInfoModalProps = {
  theme: string;
};

async function ImageInfoModal(props: ImageInfoModalProps) {
  const response = await fetch(
    `${siteMetadata.SITE_URL}/api/v1/design-info?theme=${props.theme}`,
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
            src={`/api/v1/lgtm-images?theme=${props.theme}`}
            alt={props.theme}
            className="max-h-full max-w-full object-contain"
          />
        </div>
      </SheetTrigger>
      <SheetContent className="space-y-4 p-0 pt-8">
        <SheetHeader className="space-y-2 px-4">
          <SheetTitle className="text-2xl font-semibold">
            {props.theme}
          </SheetTitle>
          <p className="text-sm">{designInfo?.description}</p>
        </SheetHeader>
        <ImageForm theme={props.theme} info={designInfo} />
      </SheetContent>
    </Sheet>
  );
}

export default ImageInfoModal;
