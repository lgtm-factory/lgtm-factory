import Image from "next/image";
import tapeImage from "@/assets/tepe.svg";
import { siteMetadata } from "@/lib/constants";
import { Popover, PopoverContent, PopoverTrigger } from "./shadcn-ui/popover";

const CustomLink = (props: { href: string; children: React.ReactNode }) => {
  return (
    <a
      href={props.href}
      target="_blank"
      rel="noopener noreferrer"
      className="underline hover:text-foreground"
    >
      {props.children}
    </a>
  );
};

function SupportPopover() {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <div className="fixed bottom-4 right-4 z-50 hidden w-fit cursor-pointer hover:opacity-80 sm:bottom-8 sm:right-8 sm:block">
          <Image
            src={tapeImage}
            alt="Support link banner"
            className="w-32 sm:w-40"
          />
          <div className="absolute -translate-y-8 translate-x-1 items-center gap-1 font-medium text-white sm:-translate-y-9 sm:translate-x-4">
            <span>Enjoy LGTM ??</span>
          </div>
        </div>
      </PopoverTrigger>
      <PopoverContent className="mr-4 flex w-80 justify-center rounded-none rounded-br-3xl sm:w-96">
        <div className="absolute bottom-0 right-0 mr-4 h-6 w-6 rounded-br-3xl border-l border-t bg-gray-100" />
        <div className="absolute -top-5 h-10 w-32 bg-[#FFF09F]/90" />

        <div className="flex-col space-y-3">
          <p className="text-3xl">👀</p>
          <p className="font-medium">
            LGTM Factory をお楽しみいただけましたか？
          </p>
          <p className="text-sm leading-relaxed text-muted-foreground">
            もし役に立つと思った場合は、
            <br />
            <CustomLink href={siteMetadata.GITHUB_URL}>
              GitHub ページ
            </CustomLink>
            で ⭐star を付けてください！
            <br />
            <CustomLink href={siteMetadata.TWITTER_SHARE}>
              X（Twitter）
            </CustomLink>
            で共有してください！！
            <br />
          </p>
          <p className="text-sm text-muted-foreground">
            継続的なメンテナンスの励みになります :)
          </p>
        </div>
      </PopoverContent>
    </Popover>
  );
}

export default SupportPopover;
