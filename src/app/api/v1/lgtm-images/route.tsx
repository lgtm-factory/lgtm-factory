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

    if (!theme) {
      throw new Error("theme is required");
    }

    const { getLgtmData } = await import(`../../../../../lgtm-data/${theme}`);
    const { jsx, options } = getLgtmData();

    return new ImageResponse(jsx, options);
  } catch (error) {
    console.error(error);
    const { jsx, options } = errorData();
    return new ImageResponse(jsx, options);
  }
}
