import { cn } from "@/lib/shadcn-utils";
import Image from "next/image";

function LgtmImage({
  theme,
  className,
}: {
  theme: string;
  className?: string;
}) {
  return (
    <Image
      src={`/api/v1/lgtm-images?theme=${theme}`}
      alt="LGTM image"
      width={1200}
      height={630}
      className={cn("shadow-md", className)}
    />
  );
}

export default LgtmImage;

// async function MainSection() {
//   const themes = await getFileNames();
//   const text = "shiso";
//   return (
//     <section>
//       <div className="mx-auto grid w-fit gap-8 sm:grid-cols-2 sm:gap-14 lg:grid-cols-3">
//         {themes?.map((theme: string) => {
//           return (
//             <div key={theme} className="cursor-pointer shadow-md">
//               <Image
//                 src={`/api/v1/lgtm-images?theme=${theme}&text=${encodeURIComponent(text)}`}
//                 alt="LGTM image"
//                 width={1200}
//                 height={630}
//               />
//             </div>
//           );
//         })}
//       </div>
//     </section>
//   );
// }
