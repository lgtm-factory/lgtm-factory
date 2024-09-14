"use client";

import { Button } from "@/components/shadcn-ui/button";
import { toast } from "sonner";

function CopyButton({ url }: { url: string }) {
  const mdText = `![LGTM-image](${url})`;
  function copy(text: string) {
    navigator.clipboard.writeText(text);
    toast("Copied!");
  }
  return (
    <Button onClick={() => copy(mdText)} className="flex-1">
      copy
    </Button>
  );
}

export default CopyButton;
