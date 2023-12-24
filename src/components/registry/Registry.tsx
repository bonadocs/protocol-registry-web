import React from "react";
import { Header } from "../header/Header";
import { RegistryWrapper } from "./RegistryWrapper";

interface RegistryProps {}

export const Registry: React.FC = <
  PROPS extends RegistryProps & React.HTMLAttributes<any>
>({
  ...rest
}: PROPS): JSX.Element => {
  // Component logic goes here

  return (
    <div className="bonadocs__search__registry">
      <Header />
      <RegistryWrapper/>
    </div>
  );
};
