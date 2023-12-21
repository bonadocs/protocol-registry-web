import React from "react";
import Image from "next/image";

interface SidebarProps {}

export const Sidebar = <
  PROPS extends SidebarProps & React.HTMLAttributes<any>
>({
  ...rest
}: PROPS): JSX.Element => {
  return (
    <div {...rest}>
      <Image
        className="bonadocs__search__sidebar__logo"
        src="https://res.cloudinary.com/dfkuxnesz/image/upload/v1701756396/bonadocs-Logo_zilqrl.svg"
        alt="Bonadocs Logo"
        width={119}
        height={18}
      />
      <div>
        <h3 className="bonadocs__search__sidebar__title">Search and explore</h3>
        <p className="bonadocs__search__sidebar__description">
          Effortlessly search for your favorite Web3 projects using our
          intuitive search bar. Whether you&apos;re into decentralized finance,
          NFTs, or blockchain gaming, Bonadocs has you covered.
        </p>
      </div>
      <div className="jk"></div>
    </div>
  );
};
