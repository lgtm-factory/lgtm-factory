"use client";

import Button from '../components/Button';


export default function Home() {
  function copy(copyText: string) {
    navigator.clipboard.writeText(copyText);
    alert("Copied!");
  } 
  // 仮のurl
  const copyText = `[![LGTMeow](https://lgtm-images.lgtmeow.com/2022/05/10/23/8bb2a459-a0b5-4acc-970c-69ad8808f905.webp)](https://lgtmeow.com)`;
  return (
    <main className="p-16">
      <Button
        onClick={() => copy(copyText)}
      >
        copy!
      </Button>
    </main>
  );
}
