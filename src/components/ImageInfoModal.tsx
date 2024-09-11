"use client";

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
import { Button } from "@/components/shadcn-ui/button";
import { FormField } from "@/components/shadcn-ui/form";
import CopyButton from "@/components/CopyButton";
import DownloadButton from "@/components/DownloadButton";
import ShareButton from "@/components/ShareButton";
import LgtmImage from "@/components/LgtmImage";
import { siteMetadata } from "@/lib/constants";
import { DesignInfo } from "@/types/lgtm-data";
import { useEffect, useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import Image from "next/image";

function ImageInfoModal({ theme }: { theme: string }) {
  const { register, handleSubmit, setValue, getValues } = useForm();

  const [url, setUrl] = useState(`/api/v1/lgtm-images?theme=${theme}`);

  type Inputs = {
    text?: string;
    emoji?: string;
    color?: string;
  };

  const [info, setInfo] = useState<DesignInfo | null>(null);

  useEffect(() => {
    async function getDesignInfo(theme: string) {
      try {
        const response = await fetch(
          `${siteMetadata.SITE_URL}/api/v1/design-info?theme=${theme}`,
        );
        const { designInfo } = await response.json();
        setInfo(designInfo);
      } catch (error: unknown) {
        if (error instanceof Error) {
          console.error(`fetch error: ${error.message}`);
          setInfo(null);
        }
      }
    }

    getDesignInfo(theme);
  }, [theme]);

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    const queryParams = new URLSearchParams({
      text: data.text || "LGTM Factory",
      emoji: data.emoji || "📦",
      color: data.color || "#000000",
    });

    const newUrl = `/api/v1/lgtm-images?theme=${theme}&${queryParams}`;
    setUrl(newUrl);
  };

  return (
    <Sheet>
      <SheetTrigger>
        <div className="flex h-full w-full cursor-pointer items-center hover:opacity-80 sm:aspect-square">
          <Image
            width={1200}
            height={630}
            src={url}
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
        <LgtmImage url={url} />
        <div className="flex gap-4">
          <CopyButton url={`${siteMetadata.SITE_URL}${url}`} />
          <DownloadButton url={`${siteMetadata.SITE_URL}${url}`} />
        </div>
        <ShareButton />
        {info?.editableFields && info.editableFields.length > 0 && (
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            {info?.editableFields?.map(
              (editableField: string, index: number) => (
                <Input
                  key={editableField}
                  defaultValue={getValues(editableField)}
                  {...register(editableField)}
                  type="text"
                  placeholder={editableField}
                />
              ),
            )}
            <Button className="w-full" type="submit">
              submit
            </Button>
          </form>
        )}
      </SheetContent>
    </Sheet>
  );
}

export default ImageInfoModal;
