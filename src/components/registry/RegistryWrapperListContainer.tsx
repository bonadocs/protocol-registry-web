"use client";
import React, { useState } from "react";
import { RegistryWrapperListContainerItem } from "./RegistryWrapperListContainerItem";
import { Option } from "../../app/types";
import { Overlay } from "../overlay/Overlay";
import { deepSearch } from "@bonadocs/core";

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
  const [showOverlay, setShowOverlay] = useState(false);
  const query = async () => {
    console.log(await deepSearch({ q: "" }));
  };
    
    const closeOverlay = () => { 
      setShowOverlay(false)
      document.body.style.overflow = "auto";
    }
  return (
    <>
      {/* <button onClick={() => query()}>drfd</button> */}
      <div className={className}>
        {options.map((option, index) => (
          <RegistryWrapperListContainerItem
            key={index}
            index={index}
            image={option.image}
            tag={option.tag}
            onClick={() => {
              setShowOverlay(true)
              document.body.style.overflow = "hidden";
            }
            }
          />
        ))}
      </div>
      {showOverlay  && <Overlay closeOverlay={closeOverlay}/>}
    </>
  );
};
