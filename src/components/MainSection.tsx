import fs from "fs/promises";
import Image from "next/image";
import path from "path";
import EditSheet from "./EditSheet";
// import { importLgtmDataModule } from "@/app/api/v1/lgtm-images/_utils";
// import { InputData } from "@/types/lgtm-data";

async function getFileNames() {
  const fileNames = await fs.readdir("lgtm-data");
  const themes = fileNames
    .map((file) => path.parse(file).name)
    .filter((theme) => theme !== "error");
  return themes;
}

// async function getDesignInfo(themes: string[], inputData: InputData) {
//   themes.forEach(async(theme) => {
//     const getLgtmData = await importLgtmDataModule(theme)
//     const {designInfo} = await getLgtmData(inputData);
//     console.log(designInfo)
// });
// }

async function MainSection() {
  const themes = await getFileNames();

  return (
    <section>
      <div className="mx-auto grid w-fit gap-8 sm:grid-cols-2 sm:gap-14 lg:grid-cols-3">
        {themes?.map((theme: string) => {
          return (
            <div key={theme} className="cursor-pointer shadow-md">
              <EditSheet theme={theme}>
                <Image
                  src={`/api/v1/lgtm-images?theme=${theme}`}
                  alt="LGTM image"
                  width={1200}
                  height={630}
                />
              </EditSheet>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default MainSection;
