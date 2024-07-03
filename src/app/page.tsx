import { Sidebar } from "@/layout/sidebar/Sidebar";
import { Registry } from "@/layout/registry/Registry";
import type { Metadata } from "next";
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

export default function Home() {
  return (
    <div className="bonadocs__search">
      <Sidebar />
      <Registry />
    </div>
  );
}
