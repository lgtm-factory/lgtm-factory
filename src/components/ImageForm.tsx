"use client";

import { useState } from "react";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { DesignInfo, InputData } from "@/types/lgtm-data";
import { Button } from "./shadcn-ui/button";
import { Input } from "./shadcn-ui/input";
import CopyButton from "./CopyButton";
import DownloadButton from "./DownloadButton";
import { ArrowUp } from "lucide-react";
import Image from "next/image";
import { DEFAULT_VALUES } from "@/app/api/v1/lgtm-images/_constants";

type ImageFormProps = {
  theme: string;
  info: DesignInfo;
};

function ImageForm(props: ImageFormProps) {
  const [url, setUrl] = useState(`/api/v1/lgtm-images?theme=${props.theme}`);
  const { register, handleSubmit } = useForm<InputData>();

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    const queryParams = new URLSearchParams({
      text: data.text || DEFAULT_VALUES.text,
      emoji: data.emoji || DEFAULT_VALUES.emoji,
      color: data.color || DEFAULT_VALUES.color,
    });

    const newUrl = `/api/v1/lgtm-images?theme=${props.theme}&${queryParams}`;
    setUrl(newUrl);
  };
  return (
    <>
      <div className="flex items-center gap-4 px-4">
        <CopyButton url={url} variant="button" />
        <DownloadButton url={url} />
      </div>
      <div className="relative flex h-[360px] w-full bg-muted p-0">
        <Image
          width={1200}
          height={630}
          src={url}
          alt={props.theme}
          className="max-h-full max-w-full object-contain"
        />
        <CopyButton url={url} variant="icon" />
      </div>
      <p className="mr-4 text-end text-sm text-muted-foreground">
        Contribute by @{props.info?.author}
      </p>

      {props.info?.editableFields && props.info.editableFields.length > 0 && (
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="relative space-y-4 px-20"
        >
          <p className="text-lg">Generate with:</p>
          {props.info?.editableFields?.map((editableField) => (
            <div className="relative" key={editableField}>
              <Input
                defaultValue={DEFAULT_VALUES[editableField as keyof InputData]}
                {...register(editableField as keyof InputData)}
                type="text"
                placeholder={editableField}
                className="h-16 border-none pr-10 text-lg shadow-lg"
              />
              <Button
                className="absolute right-0 top-0 flex h-16 w-16 items-center border border-gray-300 hover:bg-gray-200"
                type="submit"
                variant="secondary"
              >
                <ArrowUp className="h-6 w-6" />
              </Button>
            </div>
          ))}
        </form>
      )}
    </>
  );
}

export default ImageForm;
