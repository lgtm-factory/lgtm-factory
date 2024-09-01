"use client";

import { Button } from "@/components/shadcn-ui/button";
import { siteMetadata } from "@/lib/constants";

function ShareButton() {
  const share_url = `${siteMetadata.TWITTER_SHARE}`;
  return (
    <Button asChild className="w-full">
      <a href={share_url} target="_blank">
        Share X
      </a>
    </Button>
  );
}

export default ShareButton;
