"use client";
import React from "react";
import { Button } from "../button/Button";
import { TextInput } from "../input/TextInput";
import { useProtocolContext } from "@/context/ProtocolContext";

export const Header: React.FC = () => {
  const { currentSelection, updateCurrentSelection } = useProtocolContext();
  
  const updateProtocols = (queryText: string) => {
    updateCurrentSelection({ ...currentSelection, q: queryText }, false);
    
  };

  return (
    <header className="bonadocs__search__registry__header">
      <TextInput
        className="bonadocs__search__registry__header__input"
        placeholder="Search protocols"
        updateText={updateProtocols}
        value={currentSelection.q}
      />
      <Button
        className="bonadocs__search__registry__header__button"
        icon={
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M9.21346 8.1528L6.72068 5.66002C8.15171 4.46691 9.99158 3.75 12 3.75C14.0084 3.75 15.8483 4.46691 17.2793 5.66002L14.7865 8.1528C14.0038 7.58488 13.041 7.25 12 7.25C10.959 7.25 9.99619 7.58488 9.21346 8.1528ZM8.1528 9.21346L5.66002 6.72068C4.46691 8.15171 3.75 9.99158 3.75 12C3.75 14.0084 4.46691 15.8483 5.66002 17.2793L8.1528 14.7865C7.58488 14.0038 7.25 13.041 7.25 12C7.25 10.959 7.58488 9.99619 8.1528 9.21346ZM9.21346 15.8472L6.72068 18.34C8.15171 19.5331 9.99158 20.25 12 20.25C14.0084 20.25 15.8483 19.5331 17.2793 18.34L14.7865 15.8472C14.0038 16.4151 13.041 16.75 12 16.75C10.959 16.75 9.99619 16.4151 9.21346 15.8472ZM15.8472 14.7865L18.34 17.2793C19.5331 15.8483 20.25 14.0084 20.25 12C20.25 9.99158 19.5331 8.15171 18.34 6.72068L15.8472 9.21346C16.4151 9.99619 16.75 10.959 16.75 12C16.75 13.041 16.4151 14.0038 15.8472 14.7865ZM12 2.25C9.30782 2.25 6.86929 3.34213 5.10571 5.10571C3.34213 6.86929 2.25 9.30782 2.25 12C2.25 14.6922 3.34213 17.1307 5.10571 18.8943C6.86929 20.6579 9.30782 21.75 12 21.75C14.6922 21.75 17.1307 20.6579 18.8943 18.8943C20.6579 17.1307 21.75 14.6922 21.75 12C21.75 9.30782 20.6579 6.86929 18.8943 5.10571C17.1307 3.34213 14.6922 2.25 12 2.25ZM8.75 12C8.75 10.2051 10.2051 8.75 12 8.75C13.7949 8.75 15.25 10.2051 15.25 12C15.25 13.7949 13.7949 15.25 12 15.25C10.2051 15.25 8.75 13.7949 8.75 12Z"
              fill="#95A8C0"
            />
          </svg>
        }
      >
        Help
      </Button>
    </header>
  );
};
