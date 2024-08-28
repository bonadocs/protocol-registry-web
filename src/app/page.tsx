import { HomeWrapper } from "@/layout/HomeWrapper";
import { Metadata, ResolvingMetadata } from "next";

import "../styles/main.scss";

export const metadata: Metadata = {
  title: "Bonadocs Protocol Registry",
  description: "Explore protocols and their documentation",
  openGraph: {
    images: [
      "https://res.cloudinary.com/dfkuxnesz/image/upload/v1719732142/Screenshot_2024-06-30_at_08.21.55_kyfylz.png",
    ],
  },
};

// type Props = {
//   params: { id: string };
//   searchParams: { [key: string]: string | undefined };
// };

// export async function generateMetadata(
//   { params, searchParams }: Props,
//   parent: ResolvingMetadata
// ): Promise<Metadata> {
//   // read route params

//   const name = searchParams.chain ?? "Bonadocs";
//   return {
//     title: `${name.charAt(0).toUpperCase() + name.slice(1)} Protocol Registry`,
//     description: `Explore ${name} protocols and their documentation`,
//     openGraph: {
//       images: [
//         "https://res.cloudinary.com/dfkuxnesz/image/upload/v1719732142/Screenshot_2024-06-30_at_08.21.55_kyfylz.png",
//       ],
//     },
//   };
// }

export default function Home() {
  return <HomeWrapper />;
}
