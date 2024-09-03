import { siteMetadata } from "@/lib/constants";
import ImageInfoModal from "./ImageInfoModal";
import LgtmImage from "./LgtmImage";

async function ImageInfoModalWrapper({ theme }: { theme: string }) {
  let info;
  try {
    const response = await fetch(
      `${siteMetadata.SITE_URL}/api/v1/design-info?theme=${theme}`,
    );
    const { designInfo } = await response.json();
    info = designInfo;
  } catch (error: unknown) {
    if (error instanceof Error) {
      console.error(`fetch error: ${error.message}`);
      info = null;
    }
  }

  return (
    <ImageInfoModal theme={theme} info={info}>
      <LgtmImage theme={theme} className="cursor-pointer" />
    </ImageInfoModal>
  );
}

export default ImageInfoModalWrapper;
