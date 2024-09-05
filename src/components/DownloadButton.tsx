"use client";

import { Button } from "@/components/shadcn-ui/button";

function DownloadButton({ url }: { url: string }) {
  return (
    <Button asChild className="flex-1">
      <a href={url} download="lgtm-image">
        download
      </a>
    </Button>
  );
}

export default DownloadButton;
