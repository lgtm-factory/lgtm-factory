import fs from "fs/promises";
import path from "path";
import ImageInfoModal from "@/components/ImageInfoModal";
import { metadata } from "@/app/layout";
import LgtmImage from "@/components/LgtmImage";

async function getFileNames() {
  const fileNames = await fs.readdir("lgtm-data");
  const themes = fileNames
    .map((file) => path.parse(file).name)
    .filter((theme) => theme !== "error");
  return themes;
}

async function MainSection() {
  const themes = await getFileNames();
  // metadataはサーバーコンポーネントでのみ使用可能
  const baseUrl = metadata.metadataBase!.origin;

  return (
    <section>
      <div className="mx-auto grid w-fit gap-8 sm:grid-cols-2 sm:gap-14 lg:grid-cols-3">
        {themes?.map((theme: string) => {
          return (
            <ImageInfoModal theme={theme} key={theme} baseUrl={baseUrl}>
              <LgtmImage theme={theme} className="cursor-pointer" />
            </ImageInfoModal>
          );
        })}
      </div>
    </section>
  );
}

export default MainSection;
