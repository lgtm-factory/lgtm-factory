import { NextRequest } from "next/server";
import { ImageResponse } from "next/og";
import { DEFAULT_VALUES } from "./_constants";
import {
  importLgtmDataModule,
  getSearchParams,
  handleMissingTheme,
  handleError,
  validateInputData,
  handleValidationError,
} from "./_utils";

export const runtime = "edge";

export async function GET(request: NextRequest) {
  const { theme, text, emoji, color } = getSearchParams(request);

  const inputData = {
    emoji: emoji || DEFAULT_VALUES.emoji,
    text: text || DEFAULT_VALUES.text,
    color: color || DEFAULT_VALUES.color,
  };

  // テーマが入力されなかった場合
  if (!theme) {
    return handleMissingTheme(inputData);
  }

  const validationResult = validateInputData(inputData);
  if (!validationResult.success) {
    return handleValidationError(inputData);
  }

  try {
    const getLgtmData = await importLgtmDataModule(theme);
    const { element, options } = getLgtmData(inputData);
    return new ImageResponse(element, { ...options, status: 200 });
  } catch (error: unknown) {
    return handleError(error, theme, inputData);
  }
}
