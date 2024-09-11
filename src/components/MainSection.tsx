import fs from "fs/promises";
import path from "path";
import ImageInfoModal from "./ImageInfoModal";

async function getFileNames() {
  const fileNames = await fs.readdir("lgtm-data");
  const themes = fileNames
    .map((file) => path.parse(file).name)
    .filter((theme) => theme !== "error");
  return themes;
}

async function MainSection() {
  const themes = await getFileNames();

  return (
    <section>
      <div className="mx-auto grid w-fit gap-x-3 gap-y-6 px-16 sm:grid-cols-2 sm:px-0 lg:grid-cols-4">
        {themes?.map((theme: string) => {
          return <ImageInfoModal theme={theme} key={theme} />;
        })}
      </div>
    </section>
  );
}

export default MainSection;
