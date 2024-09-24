import { GetLgtmDataResult, InputData } from "@/types/lgtm-data";
import getFontData from "@/utils/google-font";
import { ImageResponseOptions } from "next/server";

async function getLgtmData(inputData: InputData): Promise<GetLgtmDataResult> {
  const designInfo = {
    author: "kagome",
    description: "ハロウィン時期のコードレビューに🦇💜",
    editableFields: [],
  };

  const options: ImageResponseOptions = {
    width: 1200,
    height: 630,
    emoji: "twemoji",
    fonts: [
      {
        name: "Marhey",
        data: await getFontData(
          "https://fonts.googleapis.com/css2?family=Marhey",
        ),
      },
    ],
  };

  const element = (
    <div tw="flex relative h-full w-full items-center justify-center bg-violet-800 rounded-3xl">
      <p
        tw="text-[192px] absolute -bottom-16 left-10"
        style={{ transform: "rotate(-24deg)" }}
      >
        🎃
      </p>
      <p
        tw="text-[120px] leading-none absolute bottom-48 left-20"
        style={{ transform: "rotate(-24deg)" }}
      >
        🍬
      </p>
      <p
        tw="text-[560px] leading-none absolute -top-56 -right-16"
        style={{ transform: "rotate(16deg)" }}
      >
        👻
      </p>
      <p
        tw="text-7xl text-white"
        style={{
          textShadow: "8px 8px indigo",
          transform: "translateY(8px)",
        }}
      >
        Looks Good To Me!
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
