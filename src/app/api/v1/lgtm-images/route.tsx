import { NextRequest } from "next/server";
import { ImageResponse } from "next/og";
import { getErrorData } from "@/lgtm-data/error";

export const runtime = "edge";

export async function GET(request: NextRequest) {
  try {
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

    let getLgtmData;
    try {
      ({ getLgtmData } = await import(`../../../../../lgtm-data/${theme}`));
    } catch (error: unknown) {
      // 指定されたテーマが存在しない場合
      if (
        error instanceof Error &&
        "code" in error &&
        error.code === "MODULE_NOT_FOUND"
      ) {
        const { jsx, options } = getErrorData({
          statusText: `Invalid theme: ${theme}`,
        });
        return new ImageResponse(jsx, { ...options, status: 404 });
      } else {
        // テーマの読み込みに失敗した場合
        const { jsx, options } = getErrorData({
          statusText: `Failed to load theme: ${theme}`,
        });
        return new ImageResponse(jsx, { ...options, status: 500 });
      }
    }

    const { jsx, options } = getLgtmData();

    return new ImageResponse(jsx, { ...options, status: 200 });
  } catch (_) {
    // 予期せぬエラーが発生した場合
    const { jsx, options } = getErrorData({
      statusText: "An unexpected error occurred",
    });
    return new ImageResponse(jsx, { ...options, status: 500 });
  }
}
