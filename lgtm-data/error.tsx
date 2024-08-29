import { GetLgtmDataResult, InputData } from "@/types/lgtm-data";

export default function getErrorData(inputData: InputData): GetLgtmDataResult {
  const designInfo = {
    author: "@username",
    description: "APIのエラーハンドリング用",
    editableFields: ["text"],
  };

  const options = {
    width: 1200,
    height: 630,
  };
  const element = (
    <div tw="flex h-full w-full items-center justify-center bg-white text-7xl">
      🚨 {inputData.text} 🐈‍⬛
    </div>
  );
  return { element, options, designInfo };
}
