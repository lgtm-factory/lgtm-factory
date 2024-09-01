"use client";

import { Button } from "@/components/shadcn-ui/button";

function ShareButton() {
  const share_url =
    "https://twitter.com/intent/tweet?text=自由自在なフリーLGTM画像で、プロジェクトを彩る📦&url=https://github.com/lgtm-factory/lgtm-factory&hashtags=LGTMfactory,OpenSource ”Tweet this project”";
  return (
    <Button asChild className="w-full">
      <a href={share_url} target="_blank">
        Share X
      </a>
    </Button>
  );
}

export default ShareButton;
