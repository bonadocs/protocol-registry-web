"use client";
import React, { ChangeEvent, useRef, useEffect } from "react";
import { SelectInput } from "../../input/SelectInput";
import { RegistryWrapperList } from "./RegistryWrapperList";
import { Header } from "../../header/Header";
import { options } from "../../../data";
import { useProtocolContext } from "@/context/ProtocolContext";
import { Pagination } from "../../pagination/Pagination";

interface RegistryWrapperProps {
  className?: string;
}
// eslint-disable-next-line react/display-name
export const RegistryWrapper: React.FC<RegistryWrapperProps> = React.memo(
  ({ className }) => {
    const { loading, currentSelection, updateCurrentSelection, searchResults } =
      useProtocolContext();

    const updateProtocols = (event: ChangeEvent<HTMLSelectElement>) => {
      const chain = event.target.value;
      const selectedOption = options.find((option) => option.value === chain);
      updateCurrentSelection({
        ...currentSelection,
        chainIds: [selectedOption?.id || 0],
      });
    };

    const defaultOption = options.find(
      (option) => option.id === (currentSelection.chainIds ?? [])[0]
    );

    return (
      <div className={className}>
        <Header />
        <div className="bonadocs__search__registry__content">
          <SelectInput
            defaultOption={defaultOption}
            options={options}
            updateChainId={updateProtocols}
          />
          <h3 className="bonadocs__search__registry__content__title">
            Popular search on Bonadocs today
          </h3>
          <RegistryWrapperList />
          {loading && <>Loading...</>}
        </div>
        <Pagination
          className="bonadocs__search__registry__content__pagination"
          itemsPerPage={searchResults?.pageSize}
          totalItems={searchResults?.total}
          page={
            searchResults?.total
              ? 0 / (searchResults?.pageSize ?? 0) <
                (currentSelection.page ?? 0)
                ? 1
                : currentSelection?.page
              : 0
          }
          onPageChange={(pageNumber) =>
            updateCurrentSelection({
              ...currentSelection,
              page: pageNumber,
            })
          }
        />
      </div>
    );
  }
);
