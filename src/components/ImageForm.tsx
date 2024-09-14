"use client";

import { siteMetadata } from "@/lib/constants";
import CopyButton from "./CopyButton";
import LgtmImage from "./LgtmImage";
import DownloadButton from "./DownloadButton";
import ShareButton from "./ShareButton";
import { SubmitHandler, useForm } from "react-hook-form";
import { useState } from "react";
import { Button } from "./shadcn-ui/button";
import { DesignInfo } from "@/types/lgtm-data";
import { Input } from "./shadcn-ui/input";

function ImageForm({
  theme,
  info,
}: {
  theme: string;
  info: DesignInfo | null;
}) {
  const [url, setUrl] = useState(`/api/v1/lgtm-images?theme=${theme}`);
  const { register, handleSubmit, getValues } = useForm();
  type Inputs = {
    text?: string;
    emoji?: string;
    color?: string;
  };
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
    <>
      <LgtmImage url={url} />
      <div className="flex gap-4">
        <CopyButton url={`${siteMetadata.SITE_URL}${url}`} />
        <DownloadButton url={`${siteMetadata.SITE_URL}${url}`} />
      </div>
      <ShareButton />
      {info?.editableFields && info.editableFields.length > 0 && (
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          {info?.editableFields?.map((editableField: string) => (
            <Input
              key={editableField}
              defaultValue={getValues(editableField)}
              {...register(editableField)}
              type="text"
              placeholder={editableField}
            />
          ))}
          <Button className="w-full" type="submit">
            submit
          </Button>
        </form>
      )}
    </>
  );
}

export default ImageForm;
