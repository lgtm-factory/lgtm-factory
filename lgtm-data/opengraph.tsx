import { siteMetadata } from "@/lib/constants";
import { GetLgtmDataResult, InputData } from "@/types/lgtm-data";
import getFontData from "@/utils/google-font";
import { ImageResponseOptions } from "next/server";

async function getLgtmData(inputData: InputData): Promise<GetLgtmDataResult> {
  const designInfo = {
    author: "kazzyfrog",
    description: "LGTM Factory の OpenGraph 画像です 📦",
    editableFields: ["emoji"],
  };

  const options: ImageResponseOptions = {
    width: 1200,
    height: 630,
    emoji: "twemoji",
    fonts: [
      {
        name: "Monoton",
        data: await getFontData(
          "https://fonts.googleapis.com/css2?family=Monoton",
        ),
        weight: 400,
      },
    ],
  };

  const element = (
    <div tw="flex h-full w-full flex-col items-center bg-white">
      <div tw="flex h-screen absolute">
        <img
          src={`${siteMetadata.SITE_URL}/bg-dark.png`}
          alt="paper-background"
          width={1200}
          height={630}
        />
      </div>
      <div tw="w-[323px] h-[74px] bg-black rounded-full mt-[55px]" />
      <div tw="flex mt-[35px]">
        <img
          src={`${siteMetadata.SITE_URL}/icon.svg`}
          alt="logo"
          width={512}
          tw="mr-[56px] mt-[21px]"
        />
        <h1 tw="flex flex-col items-center text-white">
          <span tw="text-[180px]">LGTM</span>
          <span tw="top-[-84px] text-[102px]">Factory</span>
        </h1>
      </div>
    </div>
  );

  return {
    designInfo,
    element,
    options,
  };
}

export default getLgtmData;
