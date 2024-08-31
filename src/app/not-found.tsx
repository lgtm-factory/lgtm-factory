import { Button } from "@/components/shadcn-ui/button";
import Link from "next/link";

function NotFound() {
  return (
    <div>
      <h2>Not Found</h2>
      <p>Could not find requested resource</p>
      <Button asChild>
        <Link href="/">Return Home</Link>
      </Button>
    </div>
  );
}

export default NotFound;
