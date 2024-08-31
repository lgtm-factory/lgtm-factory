import { Button } from "@/components/shadcn-ui/button";
import Link from "next/link";

function NotFound() {
  return (
    <div className="container mt-8 space-y-8">
      <h2 className="text-2xl font-bold">🚨 404 Not Found 🐈‍⬛</h2>
      <Button asChild>
        <Link href="/">Return Home</Link>
      </Button>
    </div>
  );
}

export default NotFound;
