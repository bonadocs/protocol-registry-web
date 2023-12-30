import React from "react";
import Image from "next/image";

interface SidebarProps {}

export const Sidebar = <
  PROPS extends SidebarProps & React.HTMLAttributes<any>
>({
  ...rest
}: PROPS): JSX.Element => {
  return (
    <div {...rest} className="bonadocs__search__sidebar">
      <img
        className="bonadocs__search__sidebar__logo"
        src="https://res.cloudinary.com/dfkuxnesz/image/upload/v1703894166/Boxed_Wordmark_rov2wn.svg"
        alt="Bonadocs Logo"
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
