import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/shadcn-ui/sheet";
import { importLgtmDataModule } from "@/app/api/v1/lgtm-images/_utils";
import { InputData } from "@/types/lgtm-data";
import CopyButton from "./CopyButton";
import DownloadButton from "./DownloadButton";
import ShareButton from "./ShareButton";
import EditArea from "./EditArea";

export default function EditSheet({
  children,
  theme,
}: {
  children: React.ReactNode;
  theme: string;
}) {
  async function getDesignInfo(theme: string, inputData: InputData) {
    const getLgtmData = await importLgtmDataModule(theme);
    const { designInfo } = await getLgtmData(inputData);
    console.log(`${theme}: ${designInfo}`);
  }

  return (
    <Sheet>
      <SheetTrigger>{children}</SheetTrigger>
      <SheetContent className="space-y-8 p-10">
        <SheetHeader>
          <SheetTitle>Theme: Summer Sea</SheetTitle>
          <ul>
            <li>Perfect for code reviews in August!</li>
            <li>color: </li>
            <li>author: kagome</li>
          </ul>
        </SheetHeader>
        <div className="h-[200px] w-full rounded-sm bg-black bg-opacity-30"></div>
        <div className="flex gap-4">
          <CopyButton copyText="test copy text" />
          <DownloadButton url="test download url" />
        </div>
        <ShareButton />
        <EditArea />
      </SheetContent>
    </Sheet>
  );
}
