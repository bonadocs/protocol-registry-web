import { SelectInput } from "@/components/input/SelectInput";
import React, { ChangeEvent, useState, useEffect, use } from "react";
import { useProtocolContext } from "@/context/ProtocolContext";
import { chainOptions as options } from "../../data/data";

interface Option {
  value: string;
  label: string;
}

export const ChainOptions: React.FC = () => {
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

  return (
    <SelectInput
      defaultOption={option}
      options={options}
      updateOptions={updateProtocols}
      optionName="Chain"
    />
  );
};
