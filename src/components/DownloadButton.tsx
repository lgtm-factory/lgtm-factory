"use client";

import { Button } from "@/components/shadcn-ui/button";
import { siteMetadata } from "@/lib/constants";
import { Download } from "lucide-react";

type DownloadButtonProps = {
  url: string;
};

function DownloadButton(props: DownloadButtonProps) {
  return (
    <Button asChild className="flex-1" variant="outline">
      <a href={siteMetadata.SITE_URL + props.url} download="lgtm-image">
        <Download className="mr-2 h-5 w-5" /> Download
      </a>
    </Button>
  );
}

export default DownloadButton;
