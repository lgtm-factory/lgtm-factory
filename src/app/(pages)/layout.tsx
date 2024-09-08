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
      <link rel="mask-icon" href="/icon.svg" color="#3f3f46" />
      <main className="container">{children}</main>
      <SupportPopover />
    </>
  );
}
