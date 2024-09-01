"use server";

import { importLgtmDataModule } from "@/app/api/v1/lgtm-images/_utils";

export async function getDesignInfo(theme: string) {
  const inputData = {
    emoji: "",
    text: "",
    color: "",
  };
  const getLgtmData = await importLgtmDataModule(theme);
  const { designInfo } = await getLgtmData(inputData);
  return designInfo;
}
