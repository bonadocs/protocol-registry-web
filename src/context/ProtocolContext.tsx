"use client";
import React, {
  createContext,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";
import {
  deepSearch,
  DeepSearchItem,
  SearchResults,
  SearchQuery,
  preIndexDataForSearchDB,
} from "@bonadocs/core";
import { usePathname } from "next/navigation";
import { chainOptions as options } from "../data/data";
// Create the context props
interface ProtocolContextProps {
  searchResults: SearchResults<DeepSearchItem> | undefined;
  query: () => Promise<void>;
  currentProtocol: DeepSearchItem | undefined;
  currentSelection: SearchQuery;
  updateCurrentProtocol: (protocol: DeepSearchItem) => void;
  updateCurrentSelection: (query: SearchQuery, addLoader?: boolean) => void;
  loading: boolean;
}

// Create the context
const ProtocolContext = createContext<ProtocolContextProps | undefined>(
  undefined
);

// Create a custom hook to consume the context
export const useProtocolContext = (): ProtocolContextProps => {
  const context = useContext(ProtocolContext);

  if (!context) {
    throw new Error("useMyContext must be used within a MyContextProvider");
  }

  return context;
};

preIndexDataForSearchDB().catch((e) => console.error(e));

interface ProtocolProviderProps {
  children: React.ReactNode;
}
// Create the provider component
export const ProtocolProvider: React.FC<ProtocolProviderProps> = ({
  children,
}) => {
  const [searchResults, setSearchResults] = useState<
    SearchResults<DeepSearchItem> | undefined
  >(undefined);
  const pathname = usePathname();

  const pathOption = (path: string) =>
    options.find((option) => option.value === path.substring(1));

  const id = pathname.length > 1 ? [pathOption(pathname)?.id] : [42161];

  let storedData =
    pathname.length > 1
      ? {
          q: "",
          pageSize: 15,
          chainIds: [id],
        }
      : typeof localStorage !== "undefined" && localStorage.getItem("appData")
      ? JSON.parse(localStorage.getItem("appData") || "")
      : {
          q: "",
          pageSize: 15,
          chainIds: [id],
        };

  const currentSelection = useRef<SearchQuery>(storedData as SearchQuery);
  const [loading, setLoading] = useState<boolean>(false);

  const updateLoader = (state: boolean) => {
    setLoading(state);
  };

  const query = async () => {
    try {
      const searchResults = await deepSearch(currentSelection.current);
      setSearchResults(searchResults);

      // }
    } catch (err) {
      console.log("Error in query", err);
    }
  };

  const updateCurrentProtocol = (protocol: DeepSearchItem) => {
    setCurrentProtocol(protocol);
  };

  const updateCurrentSelection = async (
    searchQuery: SearchQuery,
    addLoader: boolean = true
  ) => {
    currentSelection.current = searchQuery;

    if (addLoader) {
      setSearchResults(undefined);
      updateLoader(true);
    }

    try {
      await query();
      addLoader && updateLoader(false);
    } catch (e) {
      console.log(e);
      addLoader && updateLoader(false);
    }
  };

  const [currentProtocol, setCurrentProtocol] = useState<DeepSearchItem>();

  useEffect(() => {
    // Update local storage when data changes

    localStorage.setItem("appData", JSON.stringify(currentSelection.current));
  }, [currentSelection.current]);

  return (
    <ProtocolContext.Provider
      value={{
        searchResults,
        query,
        currentProtocol,
        currentSelection: currentSelection.current,
        updateCurrentProtocol,
        updateCurrentSelection,
        loading,
      }}
    >
      {children}
    </ProtocolContext.Provider>
  );
};
