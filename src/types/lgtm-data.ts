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

export type GetImageResult = {
  designInfo: DesignInfo;
  jsx: JSX.Element;
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

export type GetImage = (inputData: InputData) => Promise<GetImageResult>;
