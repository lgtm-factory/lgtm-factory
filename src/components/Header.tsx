import Link from "next/link";
import { Button } from "@/components/shadcn-ui/button";
import logoImage from "../../public/logo.svg";
import { siteMetadata } from "@/lib/constants";
import Image from "next/image";

function HeaderButton({ children }: { children: React.ReactNode }) {
  return (
    <Button
      asChild
      variant="ghost"
      className="flex items-center gap-8 px-0 text-lg hover:bg-transparent hover:opacity-60"
    >
      {children}
    </Button>
  );
}

export default function Header() {
  return (
    <header className="sticky left-0 top-0 z-50 flex h-12 w-full items-center justify-between px-4 font-medium sm:h-20 sm:px-24">
      <HeaderButton>
        <Link href="/">
          <Image src={logoImage} alt="LGTM Factory logo" className="w-16" />
        </Link>
      </HeaderButton>
      <div className="flex items-center gap-12 text-xl">
        <HeaderButton>
          <Link href="/terms">License</Link>
        </HeaderButton>
        <HeaderButton>
          <a href={siteMetadata.GITHUB_URL} target="_blank">
            GitHub
          </a>
        </HeaderButton>
      </div>
    </header>
  );
}
