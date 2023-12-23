"use client";

import { log } from "console";
import React, { ChangeEvent, useRef, useState, useEffect } from "react";

interface Option {
  value: string;
  label: string;
}

export const SelectInput: React.FC = () => {
  const options: Option[] = [
    { value: "Ethereum", label: "Ethereum" },
    { value: "Arbitrum", label: "Arbitrum" },
    { value: "Optimism", label: "Optimism" },
    // Add other options here
  ];

  const [selectedOption, setSelectedOption] = useState<Option>(options[0]);

  const handleSelectChange = (event: ChangeEvent<HTMLSelectElement>) => {
    const selectedValue = event.target.value;
    const selectedOption = options.find(
      (option) => option.value === selectedValue
    );

    if (selectedOption) {
      setSelectedOption(selectedOption);
    }
  };

  useEffect(() => {
    // Initialize the text content based on the initial selection
    const selectElement = document.getElementById(
      "selectBox"
    ) as HTMLSelectElement;

    const initialOption = options.find(
      (option) => option.value === selectElement.value
    );

    if (
      selectElement.options[selectElement.selectedIndex].text.includes(
        "Chain: "
      ) == false
    ) {
      const selectedOne = selectElement.selectedIndex;
      options.map((option, index) => {
        if (selectedOne === index) {
          selectElement.options[selectElement.selectedIndex].text =
            "Chain: " + selectElement.options[selectElement.selectedIndex].text;
        } else if (
          selectedOne !== index &&
          selectElement.options[index].text.includes("Chain: ") === true
        ) {
          selectElement.options[index].text =
            selectElement.options[index].text.substring(6);
        }
      });
    }
  }, [options]);

  return (
    <select
      id="selectBox"
      name="selectBox"
      className="bonadocs__search__registry__content__select"
      onChange={handleSelectChange}
      value={selectedOption.value}
    >
      {options.map((option) => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  );
};
