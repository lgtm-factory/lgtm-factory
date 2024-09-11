import Header from "@/components/Header";
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
    </>
  );
}
