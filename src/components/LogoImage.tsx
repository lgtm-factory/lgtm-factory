import Image from "next/image";
import logoImage from "@/assets/logo.svg";
import { cn } from "@/lib/shadcn-utils";

export default function LogoImage({
  width = 72,
  className,
}: {
  width?: number;
  className?: string;
}) {
  return (
    <span className="inline-block align-bottom">
      <Image
        src={logoImage}
        alt="LGTM logo image"
        width={width}
        className={cn("-translate-y-1.5 -scale-x-100", className)}
      />
    </span>
  );
}
