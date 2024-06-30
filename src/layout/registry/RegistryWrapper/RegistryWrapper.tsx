"use client";
import React, { ChangeEvent, useState, useEffect, use } from "react";
import { SelectInput } from "../../../components/input/SelectInput";
import { RegistryWrapperList } from "./RegistryWrapperList";
import { Header } from "../../../components/header/Header";
import { chainOptions as options } from "../../../data/data";
import { useProtocolContext } from "@/context/ProtocolContext";
import { Pagination } from "../../../components/pagination/Pagination";
import { usePathname } from "next/navigation";

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

    const updateProtocols = (event: ChangeEvent<HTMLSelectElement>) => {
      const chain = event.target.value;
      const selectedOption = options.find((option) => option.value === chain);
      updateCurrentSelection({
        ...currentSelection,
        chainIds: [selectedOption?.id || 0],
      });
    };

    const pathname = usePathname();

    useEffect(() => {
      if (pathname.length > 1) {
        const pathOption = options.find(
          (option) => option.value === pathname.substring(1)
        );
        updateCurrentSelection({
          ...currentSelection,
          chainIds: [pathOption?.id!],
        });
        setOption(pathOption);
        
      }
    }, []);

    return (
      <div className={className}>
        <Header />
        <div className="bonadocs__search__registry__content">
          <SelectInput
            defaultOption={option}
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
