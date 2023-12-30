"use client";
import React, { useState, useEffect } from "react";
import { RegistryWrapperListContainerItem } from "./RegistryWrapperListContainerItem";
import { Overlay } from "../overlay/Overlay";
import { useProtocolContext } from "@/context/ProtocolContext";

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
    loading,
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
        {/* {loading && <h1>Loading</h1>} */}
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
