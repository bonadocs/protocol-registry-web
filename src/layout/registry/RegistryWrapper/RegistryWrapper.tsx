"use client";

import React, { useState, useEffect } from "react";
import { RegistryWrapperList } from "./RegistryWrapperList";
import { Header } from "../../../components/header/Header";
import { chainOptions as options, tags } from "../../../data/data";
import { useProtocolContext } from "@/context/ProtocolContext";
import { Pagination } from "../../../components/pagination/Pagination";
import { usePathname } from "next/navigation";
import { ChainOptions } from "@/layout/options/ChainOptions";
import { TagOptions } from "@/layout/options/TagOptions";

interface RegistryWrapperProps {
  className?: string;
}

interface Option {
  value: string;
  label: string;
}

// eslint-disable-next-line react/display-name
export const RegistryWrapper: React.FC<RegistryWrapperProps> = React.memo(
  ({ className }) => {
    const { loading, currentSelection, updateCurrentSelection, searchResults } =
      useProtocolContext();
    const [option, setOption] = useState<Option | undefined>(
      options.find(
        (option) => option.id === (currentSelection.chainIds ?? [])[0]
      ) || options[0]
    );

    return (
      <div className={className}>
        <Header />
        <div className="bonadocs__search__registry__content">
          <div className="bonadocs__search__registry__content__options">
            <ChainOptions />
            <TagOptions />
          </div>

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
