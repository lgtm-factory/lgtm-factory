import { siteMetadata } from "@/lib/constants";
import { GetLgtmDataResult, InputData } from "@/types/lgtm-data";
import getFontData from "@/utils/google-font";
import { ImageResponseOptions } from "next/server";

async function getLgtmData(inputData: InputData): Promise<GetLgtmDataResult> {
  const designInfo = {
    author: "kazzyfrog",
    description: "LGTM Factory内で、エラーが発生した際に表示される画像です🚧",
    editableFields: ["text"],
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
      {
        name: "IBM Plex Mono",
        data: await getFontData(
          "https://fonts.googleapis.com/css2?family=IBM+Plex+Mono",
        ),
        weight: 400,
      },
    ],
  };

  const element = (
    <div tw="flex h-full w-full flex-col items-center bg-[#E4CDA0]">
      <div tw="absolute flex right-[117px]">
        <svg
          width="71"
          height="630"
          viewBox="0 0 71 630"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M.52 628.931V.34h70v628.59z" fill="#FFDF37" />
          <path
            d="M1 342.252V300.01l68.902 57.764v41.648zM.52 595.996v-42.221l70 56.147v19.012l-30-.002-5-4.143zm.445-84.171v-42.241l68.901 57.763v41.649zm0-81.863v-42.241l68.901 57.763v41.649zM8.52.34h62v51.164zM.965 79.12V36.88l68.901 57.764v41.648zm0 87.711v-42.242l68.901 57.764v41.648zm0 87.71V212.3l68.901 57.763v41.649z"
            fill="#0B0B0B"
          />
        </svg>
      </div>
      <div tw="w-[323px] h-[74px] bg-black rounded-full mt-[62px] flex justify-center">
        <p tw="text-[92px] -mt-[23px]">👀</p>
      </div>
      <p
        tw="mt-[35px] text-[160px] text-[#3c3c3c]"
        style={{ fontFamily: "Monoton" }}
      >
        Error
      </p>
      <p tw="text-5xl text-[#6A5F4E]" style={{ fontFamily: "IBM Plex Mono" }}>
        {inputData.text}
      </p>
    </div>
  );

  return {
    designInfo,
    element,
    options,
  };
}

export default getLgtmData;
