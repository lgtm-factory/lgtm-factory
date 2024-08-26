import { NextRequest } from "next/server";
import { ImageResponse } from "next/og";
import getErrorData from "@/lgtm-data/error";
import { GetLgtmData } from "@/types/lgtm-data";

export const runtime = "edge";

export const DEFAULT_VALUES = {
  emoji: "📦",
  text: "LGTM Factory",
  color: "#fcd34d",
};

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const theme = searchParams.get("theme");
  const text = searchParams.get("text");
  const emoji = searchParams.get("emoji");
  const color = searchParams.get("color");

  const inputData = {
    emoji: emoji || DEFAULT_VALUES.emoji,
    text: text || DEFAULT_VALUES.text,
    color: color || DEFAULT_VALUES.color,
  };

  // テーマが入力されなかった場合
  if (!theme) {
    const { element, options } = getErrorData({
      emoji: emoji || DEFAULT_VALUES.emoji,
      color: color || DEFAULT_VALUES.color,
      text: "Theme is missing",
    });

    return new ImageResponse(element, { ...options, status: 400 });
  }

  try {
    const { default: getLgtmData }: { default: GetLgtmData } = await import(
      `../../../../../lgtm-data/${theme}`
    );

    // ファイルは存在するが、中身を取得できない場合
    if (typeof getLgtmData !== "function") {
      throw new Error("Invalid module structure");
    }

    const { element, options } = getLgtmData(inputData);

    return new ImageResponse(element, { ...options, status: 200 });
  } catch (error: unknown) {
    // テーマの読み込みに失敗した場合
    if (
      error instanceof Error &&
      error.message === "Invalid module structure"
    ) {
      const { element, options } = getErrorData({
        emoji: emoji || DEFAULT_VALUES.emoji,
        color: color || DEFAULT_VALUES.color,
        text: `Failed to load theme: ${theme}`,
      });

      return new ImageResponse(element, { ...options, status: 500 });
    }

    // 指定されたテーマが存在しない場合
    if (
      error instanceof Error &&
      error.message.includes("Cannot find module")
    ) {
      const { element, options } = getErrorData({
        emoji: emoji || DEFAULT_VALUES.emoji,
        color: color || DEFAULT_VALUES.color,
        text: `Invalid theme: ${theme}`,
      });

      return new ImageResponse(element, { ...options, status: 404 });
    }

    // 予期せぬエラーが発生した場合
    const { element, options } = getErrorData({
      emoji: emoji || DEFAULT_VALUES.emoji,
      color: color || DEFAULT_VALUES.color,
      text: "An unexpected error occurred",
    });

    return new ImageResponse(element, { ...options, status: 500 });
  }
}
