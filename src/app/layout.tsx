import type { Metadata } from "next";
import { IBM_Plex_Mono, Noto_Sans_JP, Monoton } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/shadcn-utils";
import { siteMetadata } from "@/lib/constants";

export const metadata: Metadata = {
  metadataBase: new URL(siteMetadata.SITE_URL),
  title: {
    default: siteMetadata.SITE_NAME,
    template: `%s | ${siteMetadata.SITE_NAME}`,
  },
  description: siteMetadata.SITE_DESC,
  openGraph: {
    title: siteMetadata.SITE_NAME,
    description: siteMetadata.SITE_DESC,
    url: siteMetadata.SITE_URL,
    siteName: siteMetadata.SITE_NAME,
    locale: "ja_JP",
    type: "website",
    images: [
      {
        url: "/api/v1/lgtm-images?theme=opengraph",
        width: 1200,
        height: 630,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteMetadata.SITE_NAME,
    description: siteMetadata.SITE_DESC,
  },
};

const ibmMono = IBM_Plex_Mono({
  weight: ["100", "200", "300", "400", "500", "600", "700"], // thinからboldまで指定可能
  subsets: ["latin"],
  display: "swap",
  variable: "--font-ibmMono",
});

const notojp = Noto_Sans_JP({
  preload: false,
  display: "swap",
  variable: "--font-notojp",
});

const monoton = Monoton({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
  variable: "--font-monoton",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body
        className={cn(
          ibmMono.variable,
          notojp.variable,
          monoton.variable,
          "-z-10 bg-[url('/bg-dark.png')] bg-cover bg-fixed bg-center font-sans text-foreground",
        )}
      >
        {children}
      </body>
    </html>
  );
}
