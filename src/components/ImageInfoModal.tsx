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
import { FieldValues, useForm } from "react-hook-form";

function ImageInfoModal({ theme }: { theme: string }) {
  const { register, handleSubmit, watch } = useForm();

  const text = watch("text", "LGTM Factory");
  const emoji = watch("emoji", "📦");
  const color = watch("color", "#000000");

  const imageurl = `/api/v1/lgtm-images?theme=${theme}&text=${encodeURIComponent(text)}&emoji=${encodeURIComponent(emoji)}&color=${encodeURIComponent(color)}`;
  const url = `${siteMetadata.SITE_URL}/api/v1/lgtm-images?theme=${theme}&text=${encodeURIComponent(text)}&emoji=${encodeURIComponent(emoji)}&color=${encodeURIComponent(color)}`;

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

  const onSubmit = (data: FieldValues) => {
    console.log("Form submitted with data:", data);
  };

  return (
    <Sheet>
      <SheetTrigger>
        <LgtmImage url={imageurl} className="cursor-pointer" />
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
        <LgtmImage url={imageurl} className="max-h-24" />
        <div className="flex gap-4">
          <CopyButton url={url} />
          <DownloadButton url={url} />
        </div>
        <ShareButton />
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          {info?.editableFields?.map((editableField: string, index: number) => (
            <Input
              key={index}
              {...register(editableField)}
              type="text"
              placeholder={editableField}
            />
          ))}
          <Button className="w-full" type="submit">
            submit
          </Button>
        </form>
      </SheetContent>
    </Sheet>
  );
}

export default ImageInfoModal;
