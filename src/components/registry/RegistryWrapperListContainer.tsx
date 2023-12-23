import React from "react";
import { RegistryWrapperListContainerItem } from "./RegistryWrapperListContainerItem";
import { Option } from "../../app/types";
import { Overlay } from "../overlay/Overlay";

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

type RegistryWrapperListContainerProps = {
  className?: string;
};

export const RegistryWrapperListContainer: React.FC<
  RegistryWrapperListContainerProps
> = ({ className }: RegistryWrapperListContainerProps) => {
  return (
    <>
      <div className={className}>
        {options.map((option, index) => (
          <RegistryWrapperListContainerItem
            key={index}
            index={index}
            image={option.image}
            tag={option.tag}
          />
        ))}
      </div>
      <Overlay />
    </>
  );
};
