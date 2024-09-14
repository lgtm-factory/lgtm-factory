import { NextRequest, NextResponse } from "next/server";
import { importLgtmDataModule } from "@/app/api/v1/lgtm-images/_utils";

export const runtime = "edge";

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const theme = searchParams.get("theme");

  if (!theme) {
    return NextResponse.json({ designInfo: null }, { status: 400 });
  }

  const inputData = {
    emoji: "",
    text: "",
    color: "",
  };

  try {
    const getLgtmData = await importLgtmDataModule(theme);
    const { designInfo } = await getLgtmData(inputData);
    return NextResponse.json(designInfo, { status: 200 });
  } catch (_) {
    return NextResponse.json(null, { status: 400 });
  }
}
