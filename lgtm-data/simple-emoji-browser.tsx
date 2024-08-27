import { GetLgtmDataResult, InputData } from "@/types/lgtm-data";
import { ImageResponseOptions } from "next/server";

export default function getLgtmData(inputData: InputData): GetLgtmDataResult {
  const designInfo = {
    author: "kazzyfrog",
    description: "シンプルな絵文字",
    editableFields: ["emoji"],
  };

  const options: ImageResponseOptions = {
    width: 1200,
    height: 630,
    emoji: "noto",
  };

  const element = (
    <div tw="flex h-full w-full flex-col items-center justify-center bg-white">
      <div tw="absolute left-10 top-10 flex items-center">
        <span tw="h-6 w-6 rounded-full bg-[#FF6B2C]" />
        <span tw="ml-4 h-6 w-6 rounded-full bg-[#FFD600]" />
        <span tw="ml-4 h-6 w-6 rounded-full bg-[#6CD076]" />
      </div>
      <p tw="text-[192px]">{inputData.emoji}</p>
      <div tw="m-0 text-5xl">Looks Good To Me</div>
    </div>
  );

  return {
    designInfo,
    element,
    options,
  };
}
