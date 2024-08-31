import Image from "next/image";
import tapeImage from "@/assets/tepe.svg";
import { Plus } from "lucide-react";
import { siteMetadata } from "@/lib/constants";

function NewLGTMButton() {
  return (
    <a
      href={siteMetadata.GITHUB_DESIGN_GUIDE_URL}
      target="_blank"
      className="fixed bottom-4 right-4 z-50 w-fit sm:bottom-8 sm:right-8"
    >
      <Image
        src={tapeImage}
        alt="link to GitHub page"
        className="w-32 sm:w-40"
      />
      <div className="absolute flex -translate-y-8 translate-x-1 items-center gap-1 font-medium text-white sm:-translate-y-9 sm:translate-x-2 sm:text-xl">
        <Plus />
        <span>New LGTM?</span>
      </div>
    </a>
  );
}

export default NewLGTMButton;
