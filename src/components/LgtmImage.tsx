import { cn } from "@/lib/shadcn-utils";
import Image from "next/image";

function LgtmImage({
  theme,
  className,
}: {
  theme: string;
  className?: string;
}) {
  return (
    <Image
      src={`/api/v1/lgtm-images?theme=${theme}`}
      alt="LGTM image"
      width={1200}
      height={630}
      className={cn("shadow-md", className)}
    />
  );
}

export default LgtmImage;
