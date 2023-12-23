import React from "react";
import { SelectInput } from "../select/SelectInput";
import { RegistryWrapperList } from "./RegistryWrapperList";

export const RegistryWrapper: React.FC = () => {
  return (
    <div className="bonadocs__search__registry__content">
      <SelectInput />
      <h3 className="bonadocs__search__registry__content__title">
        Popular search on Bonadocs today
      </h3>
      <RegistryWrapperList />
    </div>
  );
};
