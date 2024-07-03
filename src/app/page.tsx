import { Sidebar } from "@/layout/sidebar/Sidebar";
import { Registry } from "@/layout/registry/Registry";
import type { Metadata } from "next";
import "../styles/main.scss";

type generateMetadataProps = {
  params: { networkName: string };
  searchParams: { chain: string };
};

export async function generateMetadata({
  params,
  searchParams,
}: generateMetadataProps) {
  // read route params

  const name = searchParams.chain ?? "Bonadocs";
  return {
    title: `${name.charAt(0).toUpperCase() + name.slice(1)} Protocol Registry`,
    description: `Explore ${name} protocols and their documentation`,
    openGraph: {
      images: [
        "https://res.cloudinary.com/dfkuxnesz/image/upload/v1719732142/Screenshot_2024-06-30_at_08.21.55_kyfylz.png",
      ],
    },
  };
}

export default function Home() {
  return (
    <div className="bonadocs__search">
      <Sidebar />
      <Registry />
    </div>
  );
}
