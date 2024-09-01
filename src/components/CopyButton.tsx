"use client";

import { Button } from "@/components/shadcn-ui/button";

function CopyButton({ copyText }: { copyText: string }) {
  function copy(copyText: string) {
    navigator.clipboard.writeText(copyText);
    alert("Copied!");
  }
  return (
    <Button onClick={() => copy(copyText)} className="flex-1">
      copy
    </Button>
  );
}

export default CopyButton;
