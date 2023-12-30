import React from "react";
import { Header } from "../../components/header/Header";
import { RegistryWrapper } from "./RegistryWrapper/RegistryWrapper";
import { ProtocolProvider } from "@/context/ProtocolContext";

interface RegistryProps {}

export const Registry: React.FC = <
  PROPS extends RegistryProps & React.HTMLAttributes<any>
>({
  ...rest
}: PROPS): JSX.Element => {
  // Component logic goes here

  return (
    <ProtocolProvider>
      <RegistryWrapper className="bonadocs__search__registry" />
    </ProtocolProvider>
  );
};
