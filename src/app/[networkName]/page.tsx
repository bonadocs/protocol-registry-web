import React from "react";
import { HomeWrapper } from "@/layout/HomeWrapper";
import "../../styles/main.scss";

type generateMetadataProps = {
  params: { networkName: string };
  searchParams: URLSearchParams;
};

export async function generateMetadata({ params, searchParams }: generateMetadataProps) {
  // read route params
  const name = params.networkName ?? searchParams.get("chain");
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
  return <HomeWrapper />;
}

