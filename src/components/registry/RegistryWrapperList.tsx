import React from "react";
import Image from "next/image";
import { RegistryWrapperListContainer } from "./RegistryWrapperListContainer";

export const RegistryWrapperList: React.FC = () => {
  return (
    <RegistryWrapperListContainer
      className={"bonadocs__search__registry__content__list"}
    />
  );
};
