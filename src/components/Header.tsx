import Link from "next/link";
import { SiGithub } from "@icons-pack/react-simple-icons";
import { Button } from "@/components/shadcn-ui/button";
import LogoImage from "@/components/LogoImage";
import { siteMetadata } from "@/lib/constants";

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
    <header className="sticky left-0 top-0 z-50 flex h-12 w-full items-center justify-between px-4 font-medium sm:h-14 sm:px-6">
      <HeaderButton>
        <Link href="/">
          <LogoImage />
        </Link>
      </HeaderButton>

      <Link href="/terms">License</Link>

      <HeaderButton>
        <a href={siteMetadata.GITHUB_URL} target="_blank">
          <SiGithub size={24} />
        </a>
      </HeaderButton>
    </header>
  );
}
