import Header from "@/components/Header";
import { Toaster } from "@/components/shadcn-ui/sonner";
import SupportPopover from "@/components/SupportPopover";

export default function PageLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Header />
      <main className="container">{children}</main>
      <SupportPopover />
      <Toaster />
    </>
  );
}
