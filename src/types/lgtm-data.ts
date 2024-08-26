import { ImageResponseOptions } from "next/server";

export type InputData = {
  emoji: string;
  text: string;
  color: string;
};

export type DesignInfo = {
  author: string;
  description: string;
  editableFields: string[];
};

export type GetLgtmDataResult = {
  designInfo: DesignInfo;
  element: JSX.Element;
  options: ImageResponseOptions;
};

export type GetLgtmData = (inputData: InputData) => GetLgtmDataResult;
