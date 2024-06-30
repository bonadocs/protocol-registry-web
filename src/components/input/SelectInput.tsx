"use client";

import { log } from "console";
import { get } from "http";
import React, { ChangeEvent, useRef, useState, useEffect } from "react";

interface Option {
  value: string;
  label: string;
}

interface SelectInputProps {
  options: Option[];
  updateChainId: (event: ChangeEvent<HTMLSelectElement>) => void;
  defaultOption?: Option | undefined;
}

export const SelectInput: React.FC<SelectInputProps> = ({
  options,
  updateChainId,
  defaultOption,
}) => {

  const selectedOptionRef = useRef<Option>(
    defaultOption || { value: "", label: "" }
  );
  const displayOptions = useRef<Option[]>(options);

  const handleSelectChange = (event: ChangeEvent<HTMLSelectElement>) => {
    const selectedValue = event.target.value;
    const selectedOption = options.find(
      (option) => option.value === selectedValue
    );
    selectedOptionRef.current = selectedOption || { value: "", label: "" };
    updateDisplayText();
  };

  const updateDisplayText = () => {
    if (selectedOptionRef.current.label.includes("Chain: ") == false) {
      options.map((option, index) => {
        if (selectedOptionRef.current.value === option.value) {
          selectedOptionRef.current = {
            ...selectedOptionRef.current,
            label: "Chain: " + option.label,
          };
        }
      });
    }

    displayOptions.current = options.map((option, index) => {
      if (selectedOptionRef.current.value === option.value) {
        return { ...option, label: selectedOptionRef.current.label };
      }
      return option;
    });
  };

  useEffect(() => {
    // Initialize the text content based on the initial selection
    updateDisplayText();
  }, []);

  useEffect((() => {
    console.log('updated', defaultOption);
    selectedOptionRef.current = defaultOption || { value: "", label: "" };
    updateDisplayText();
  }),[defaultOption])

  return (
    <select
      id="selectBox"
      name="selectBox"
      className="bonadocs__search__registry__content__select"
      onChange={(event) => {
        handleSelectChange(event);
        updateChainId(event);
      }}
      value={selectedOptionRef.current.value}
    >
      {displayOptions.current.map((option) => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  );
};
