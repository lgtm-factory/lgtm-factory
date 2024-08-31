import fs from "fs/promises";
import Image from "next/image";
import path from "path";

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
      <div className="mx-auto grid w-fit gap-8 sm:grid-cols-2 sm:gap-14 lg:grid-cols-3">
        {themes?.map((theme: string) => {
          return (
            <div key={theme} className="cursor-pointer shadow-md">
              <Image
                src={`/api/v1/lgtm-images?theme=${theme}`}
                alt="LGTM image"
                width={1200}
                height={630}
              />
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default MainSection;
