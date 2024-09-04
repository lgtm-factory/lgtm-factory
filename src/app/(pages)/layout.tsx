import Header from "@/components/Header";
import NewLGTMButton from "@/components/NewLGTMButton";

export default function PageLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Header />
      <main className="container">{children}</main>
      <NewLGTMButton />
    </>
  );
}
