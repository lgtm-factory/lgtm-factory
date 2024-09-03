import { NextRequest, NextResponse } from "next/server";
import { importLgtmDataModule } from "@/app/api/v1/lgtm-images/_utils";

export const runtime = "edge";

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const theme = searchParams.get("theme");

  const inputData = {
    emoji: "",
    text: "",
    color: "",
  };

  try {
    if (theme) {
      const getLgtmData = await importLgtmDataModule(theme);
      const { designInfo } = await getLgtmData(inputData);
      return NextResponse.json({ designInfo: designInfo }, { status: 200 });
    }
  } catch (error) {
    return NextResponse.json({ designInfo: null }, { status: 400 });
  }
}
