import Image from "next/image";
import Link from "next/link";
import logoImage from "@/assets/logo.svg";
import { SiGithub } from "@icons-pack/react-simple-icons";
import { Button } from "@/components/shadcn-ui/button";
import { GITHUB_URL } from "@/lib/constants";

function HeaderButton({ children }: { children: React.ReactNode }) {
  return (
    <Button
      asChild
      variant="ghost"
      className="flex items-center gap-4 px-0 text-lg hover:bg-transparent hover:opacity-60"
    >
      {children}
    </Button>
  );
}

export default function Header() {
  return (
    <header className="fixed flex h-20 w-full items-center justify-between px-8 text-lg font-medium">
      <HeaderButton>
        <Link href="/">
          <Image
            src={logoImage}
            alt="logo image"
            width={40}
            className="-scale-x-100"
          />
          <span>LGTM Factory</span>
        </Link>
      </HeaderButton>

      <HeaderButton>
        <a href={GITHUB_URL} target="_blank">
          <SiGithub />
          <span>Create new LGTM ?</span>
        </a>
      </HeaderButton>
    </header>
  );
}
