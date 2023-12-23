import React from "react";
import Image from "next/image";

interface Option {
  name: string;
  image: string;
  tag: string;
}

const options: Option[] = [
  {
    name: "Ethereum",
    image:
      "https://res.cloudinary.com/dfkuxnesz/image/upload/v1703348572/uni-logo_xhlgp5.svg",
    tag: "uniswap-v1-protocol",
  },
  {
    name: "Ethereum",
    image:
      "https://res.cloudinary.com/dfkuxnesz/image/upload/v1703348572/uni-logo_xhlgp5.svg",
    tag: "uniswap-v1-protocol",
  },
  {
    name: "Ethereum",
    image:
      "https://res.cloudinary.com/dfkuxnesz/image/upload/v1703348572/uni-logo_xhlgp5.svg",
    tag: "uniswap-v1-protocol",
  },
  {
    name: "Ethereum",
    image:
      "https://res.cloudinary.com/dfkuxnesz/image/upload/v1703348572/uni-logo_xhlgp5.svg",
    tag: "uniswap-v1-protocol",
  },
  {
    name: "Ethereum",
    image:
      "https://res.cloudinary.com/dfkuxnesz/image/upload/v1703348572/uni-logo_xhlgp5.svg",
    tag: "uniswap-v1-protocol",
  },
  // Add other options here
];

export const RegistryWrapperList: React.FC = () => {
  // Component logic goes here

  return (
    <div className="bonadocs__search__registry__content__list">
      {options.map((option, index) => (
        <div
          key={index}
          className="bonadocs__search__registry__content__list__item"
        >
          <div>
            <Image
              className="bonadocs__search__registry__content__list__item__icon"
              width={24}
              height={24}
              alt="Protocol image"
              src={option.image}
            />
            <h3>Uniswap v1 Protocol</h3>
          </div>
          <h2 className="bonadocs__search__registry__content__list__item__id">
            Project ID
          </h2>
          <div>
            <h5 className="bonadocs__search__registry__content__list__item__tag">{`"${option.tag}"`}</h5>
            <Image
              width={16}
              height={16}
              className="bonadocs__search__registry__content__list__item__icon"
              alt="Copy icon"
              src="https://res.cloudinary.com/dfkuxnesz/image/upload/v1703350537/Copy_Icon_gbt3mh.svg"
            />
          </div>
        </div>
      ))}
    </div>
  );
};
