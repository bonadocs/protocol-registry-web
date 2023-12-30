"use client";
import React, { useState, useEffect } from "react";
import { RegistryWrapperListContainerItem } from "./RegistryWrapperListContainerItem";
import { Option } from "../../app/types";
import { Overlay } from "../overlay/Overlay";
import { deepSearch, DeepSearchItem, SearchResults } from "@bonadocs/core";
import { useProtocolContext } from "@/context/ProtocolContext";
import { Pagination } from "../pagination/Pagination";

type RegistryWrapperListContainerProps = {
  className?: string;
};

export const RegistryWrapperListContainer: React.FC<
  RegistryWrapperListContainerProps
> = ({ className }: RegistryWrapperListContainerProps) => {
  const [showOverlay, setShowOverlay] = useState(false);
  const {
    searchResults,
    currentProtocol,
    query,

    updateCurrentProtocol,
  } = useProtocolContext();

  useEffect(() => {
    query();
  }, []);

  const closeOverlay = () => {
    setShowOverlay(false);
    document.body.style.overflow = "auto";
  };

  return (
    <>
      <div className={className}>
        {searchResults?.items.map((item, index) => (
          <RegistryWrapperListContainerItem
            key={index}
            item={item}
            onClick={() => {
              updateCurrentProtocol(item);
              setShowOverlay(true);
              document.body.style.overflow = "hidden";
            }}
          />
        ))}
      </div>
      {showOverlay && (
        <Overlay
          currentProtocol={currentProtocol}
          closeOverlay={closeOverlay}
        />
      )}
    </>
  );
};
