import { GetLgtmDataResult, InputData } from "@/types/lgtm-data";

export function getErrorData(inputData: InputData): GetLgtmDataResult {
  const designInfo = {
    author: "@username",
    description: "APIのエラーハンドリング用",
    editableFields: ["text"],
  };

  const options = {
    width: 1200,
    height: 630,
    statusText: inputData.text,
  };
  const element = (
    <div
      style={{
        display: "flex",
        height: "100%",
        width: "100%",
        alignItems: "center",
        justifyContent: "center",
        background: "white",
        fontSize: "64px",
      }}
    >
      LGTM🐈‍⬛
    </div>
  );
  return { element, options, designInfo };
}
