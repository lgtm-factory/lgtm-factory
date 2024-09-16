"use client";

import { Button } from "@/components/shadcn-ui/button";
import { toast } from "sonner";
import { siteMetadata } from "@/lib/constants";
import { Copy } from "lucide-react";

function copy(text: string) {
  navigator.clipboard.writeText(text);
  toast("Copied!! 🎉🎉🎉");
}

type CopyButtonProps = {
  url: string;
  variant: "button" | "icon";
};

function CopyButton(props: CopyButtonProps): JSX.Element {
  const githubMarkdownImage = `[![LGTM Factory](${siteMetadata.SITE_URL + props.url})](${siteMetadata.SITE_URL})`;

  switch (props.variant) {
    case "icon":
      return (
        <Button
          onClick={() => copy(githubMarkdownImage)}
          className="absolute bottom-2 left-2 h-14 w-14 rounded-full bg-black/60 p-4 hover:bg-black"
          size="icon"
        >
          <Copy className="h-6 w-6 text-white" />
        </Button>
      );

    case "button":
      return (
        <Button
          onClick={() => copy(githubMarkdownImage)}
          variant="outline"
          className="flex-1"
        >
          <Copy className="mr-2 h-5 w-5" />
          Copy
        </Button>
      );
  }
}

export default CopyButton;
