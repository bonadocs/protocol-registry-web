"use client";
import React from "react";
import Image from "next/image";
import { DeepSearchItem } from "@bonadocs/core";

interface RegistryWrapperListContainerItemProps {
  item: DeepSearchItem;
  onClick?: () => void;
}

export const RegistryWrapperListContainerItem: React.FC<
  RegistryWrapperListContainerItemProps
> = ({ item, onClick }: RegistryWrapperListContainerItemProps) => {
  // Component logic goes here

  return (
    <div
      className="bonadocs__search__registry__content__list__item"
      onClick={onClick}
    >
      <div>
        <Image
          className="bonadocs__search__registry__content__list__item__icon"
          width={24}
          height={24}
          alt="Protocol image"
          src={item.logo || ""}
        />
        <h3>{item.name}</h3>
      </div>
      <h2 className="bonadocs__search__registry__content__list__item__id">
        Project ID
      </h2>
      <div>
        <h5 className="bonadocs__search__registry__content__list__item__tag">{`"${item.slug}"`}</h5>
        <Image
          width={16}
          height={16}
          className="bonadocs__search__registry__content__list__item__icon"
          alt="Copy icon"
          src="https://res.cloudinary.com/dfkuxnesz/image/upload/v1703350537/Copy_Icon_gbt3mh.svg"
        />
      </div>
    </div>
  );
};
