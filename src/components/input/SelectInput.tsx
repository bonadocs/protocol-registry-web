"use client";

import React, { ChangeEvent, useRef, useState, useEffect } from "react";

interface Option {
  value: string;
  label: string;
}

interface SelectInputProps {
  options: Option[];
  updateOptions: (event: ChangeEvent<HTMLSelectElement>) => void;
  defaultOption?: Option | undefined;
  optionName?: string;
}

export const SelectInput: React.FC<SelectInputProps> = ({
  options,
  updateOptions,
  defaultOption,
  optionName
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
    if (selectedOptionRef.current.label.includes(optionName!) == false) {
      options.map((option, index) => {
        if (selectedOptionRef.current.value === option.value) {
          selectedOptionRef.current = {
            ...selectedOptionRef.current,
            label: optionName + ": " + option.label,
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
        updateOptions(event);
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
