import { NextRequest } from "next/server";
import { ImageResponse } from "next/og";
import { errorData } from "@/lgtm-data/error";

export const runtime = "edge";

export async function GET(request: NextRequest) {
  try {
    const searchParams = request.nextUrl.searchParams;
    const theme = searchParams.get("theme");

    // 今後動的な値が必要になればここに追加し、getLgtmData()にpropsとして渡す
    // const text = searchParams.get("text");

    // テーマが入力されなかった場合
    if (!theme) {
      const { jsx, options } = errorData({
        errorMessage: "Theme is missing",
      });
      return new ImageResponse(jsx, options);
    }

    const { getLgtmData } = await import(`../../../../../lgtm-data/${theme}`);

    // 指定されたテーマが存在しない場合
    if (!getLgtmData) {
      const { jsx, options } = errorData({
        errorMessage: `Invalid theme: ${theme}`,
      });
      return new ImageResponse(jsx, options);
    }

    const { jsx, options } = getLgtmData();

    return new ImageResponse(jsx, options);
  } catch (error) {
    // 予期せぬエラーが発生した場合
    const { jsx, options } = errorData({
      errorMessage: "An unexpected error occurred",
    });
    return new ImageResponse(jsx, options);
  }
}
