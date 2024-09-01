"use client";

import { Button } from "@/components/shadcn-ui/button";

function CopyButton({ url }: { url: string }) {
  const mdText = `![LGTM-image](${url})`;
  function copy(text: string) {
    navigator.clipboard.writeText(text);
    alert("Copied!");
  }
  return (
    <Button onClick={() => copy(mdText)} className="flex-1">
      copy
    </Button>
  );
}

export default CopyButton;
