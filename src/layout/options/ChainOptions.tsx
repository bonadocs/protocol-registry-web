import { SelectInput } from "@/components/input/SelectInput";
import React, { ChangeEvent, useState, useEffect, use } from "react";
import { useProtocolContext } from "@/context/ProtocolContext";
import { chainOptions as options } from "../../data/data";
import { usePathname } from "next/navigation";

interface Option {
  value: string;
  label: string;
}

export const ChainOptions: React.FC = () => {
  const { loading, currentSelection, updateCurrentSelection, searchResults } =
    useProtocolContext();
    const id = currentSelection.chainIds?.slice()!;

    console.log("id", id[0].toString());
    
  const currentOption = () =>
    options.find((option) => option.id?.toString() === id[0].toString());

  console.log("current option", currentOption);

  const [option, setOption] = useState<Option | undefined>(currentOption);

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
