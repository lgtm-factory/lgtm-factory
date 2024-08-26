import { NextRequest } from "next/server";
import { ImageResponse } from "next/og";
import { getErrorData } from "@/lgtm-data/error";

export const runtime = "edge";

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const theme = searchParams.get("theme");

  // 今後動的な値が必要になればここに追加し、getLgtmData()にpropsとして渡す
  // const text = searchParams.get("text");

  // テーマが入力されなかった場合
  if (!theme) {
    const { jsx, options } = getErrorData({
      statusText: "Theme is missing",
    });

    return new ImageResponse(jsx, { ...options, status: 400 });
  }

  try {
    const { getLgtmData } = await import(`../../../../../lgtm-data/${theme}`);

    // ファイルは存在するが、中身を取得できない場合
    if (typeof getLgtmData !== "function") {
      throw new Error("Invalid module structure");
    }

    const { jsx, options } = getLgtmData();

    return new ImageResponse(jsx, { ...options, status: 200 });
  } catch (error: unknown) {
    // テーマの読み込みに失敗した場合
    if (
      error instanceof Error &&
      error.message === "Invalid module structure"
    ) {
      const { jsx, options } = getErrorData({
        statusText: `Failed to load theme: ${theme}`,
      });

      return new ImageResponse(jsx, { ...options, status: 500 });
    }

    // 指定されたテーマが存在しない場合
    if (
      error instanceof Error &&
      error.message.includes("Cannot find module")
    ) {
      const { jsx, options } = getErrorData({
        statusText: `Invalid theme: ${theme}`,
      });

      return new ImageResponse(jsx, { ...options, status: 404 });
    }

    // 予期せぬエラーが発生した場合
    const { jsx, options } = getErrorData({
      statusText: "An unexpected error occurred",
    });

    return new ImageResponse(jsx, { ...options, status: 500 });
  }
}
