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
  options: {
    width?: number;
    height?: number;
    emoji?: "twemoji" | "blobmoji" | "noto" | "openmoji";
    fonts?: {
      name: string;
      data: ArrayBuffer;
      weight: number;
      style: "normal" | "italic";
    }[];
  };
};

export type GetLgtmData = (inputData: InputData) => Promise<GetLgtmDataResult>;
