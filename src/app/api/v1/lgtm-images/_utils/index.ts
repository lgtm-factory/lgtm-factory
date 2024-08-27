import getErrorData from "@/lgtm-data/error";
import { NextRequest } from "next/server";
import { ERRORS } from "../_constants";
import { ImageResponse } from "next/og";
import { GetLgtmData, InputData } from "@/types/lgtm-data";
import { inputDataSchema } from "../_schemas";

export function getSearchParams(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  return {
    theme: searchParams.get("theme"),
    text: searchParams.get("text"),
    emoji: searchParams.get("emoji"),
    color: searchParams.get("color"),
  };
}

export function handleMissingTheme(inputData: InputData) {
  return createErrorResponse(inputData, ERRORS.THEME_MISSING, 400);
}

export function validateInputData(inputData: InputData) {
  return inputDataSchema.safeParse(inputData);
}

export function handleValidationError(inputData: InputData) {
  return createErrorResponse(inputData, ERRORS.INVALID_INPUT_DATA, 400);
}

export async function importLgtmDataModule(
  theme: string,
): Promise<GetLgtmData> {
  const { default: getLgtmData } = await import(
    `../../../../../../lgtm-data/${theme}`
  );

  // ファイルは存在するが、中身に異常があり読み込めない場合
  if (typeof getLgtmData !== "function") {
    throw new Error(ERRORS.INVALID_MODULE_STRUCTURE);
  }
  return getLgtmData;
}

export function handleError(
  error: unknown,
  theme: string,
  inputData: InputData,
) {
  // テーマの読み込みに失敗した場合
  if (
    error instanceof Error &&
    error.message === ERRORS.INVALID_MODULE_STRUCTURE
  ) {
    return createErrorResponse(
      inputData,
      `Failed to load theme: ${theme}`,
      500,
    );
  }
  // 指定されたテーマが存在しない場合
  if (error instanceof Error && error.message.includes("Cannot find module")) {
    return createErrorResponse(inputData, `Invalid theme: ${theme}`, 404);
  }
  // 予期せぬエラーが発生した場合
  return createErrorResponse(inputData, ERRORS.UNEXPECTED, 500);
}

function createErrorResponse(
  inputData: InputData,
  text: string,
  status: number,
) {
  const { element, options } = getErrorData({ ...inputData, text });
  return new ImageResponse(element, { ...options, status });
}
