import LogoImage from "@/components/LogoImage";

export default function Footer() {
  return (
    <footer className="sticky top-full flex h-32 items-center justify-end gap-8 px-9">
      <LogoImage />
      <span className="text-3xl font-medium">LGTM Factory</span>
    </footer>
  );
}
