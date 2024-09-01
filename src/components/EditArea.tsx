import { SheetFooter, SheetClose } from "@/components/shadcn-ui/sheet";
import { Input } from "@/components/shadcn-ui/input";
import { Button } from "@/components/shadcn-ui/button";

function EditArea() {
  return (
    <div className="space-y-4">
      <Input type="text" placeholder="Text" />
      <SheetFooter>
        <SheetClose asChild>
          <Button className="w-full">Save changes</Button>
        </SheetClose>
      </SheetFooter>
    </div>
  );
}

export default EditArea;
