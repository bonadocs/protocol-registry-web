"use client";
import React, {
  createContext,
  useContext,
  useEffect,
  useRef,
  useState,
  Suspense,
} from "react";
import {
  deepSearch,
  DeepSearchItem,
  SearchResults,
  SearchQuery,
} from "@bonadocs/core";

// Create the context props
interface ProtocolContextProps {
  searchResults: SearchResults<DeepSearchItem> | undefined;
  query: () => Promise<void>;
  currentProtocol: DeepSearchItem | undefined;
  currentSelection: SearchQuery;
  updateCurrentProtocol: (protocol: DeepSearchItem) => void;
  updateCurrentSelection: (query: SearchQuery) => void;
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

interface ProtocolProps {
  children: React.ReactNode;
}
// Create the provider component
export const ProtocolProvider: React.FC<ProtocolProps> = ({ children }) => {
  const [searchResults, setSearchResults] = useState<
    SearchResults<DeepSearchItem> | undefined
  >(undefined);
  let storedData =
    typeof localStorage !== "undefined" && localStorage.getItem("appData")
      ? JSON.parse(localStorage.getItem("appData") || "")
      : {
          q: "",
          pageSize: 15,
          chainIds: [42161],
        };

  const currentSelection = useRef<SearchQuery>(storedData as SearchQuery);
  const loadingRef = useRef<boolean>(false);
  const query = async () => {
    const searchResults = await deepSearch(currentSelection.current);
    setSearchResults(searchResults);
  };
  const updateCurrentProtocol = (protocol: DeepSearchItem) => {
    setCurrentProtocol(protocol);
  };

  const updateCurrentSelection = (searchQuery: SearchQuery) => {
    currentSelection.current = searchQuery;
    query();
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
      }}
    >
      <Suspense fallback={<h1>Loading screen</h1>}>{children}</Suspense>
    </ProtocolContext.Provider>
  );
};