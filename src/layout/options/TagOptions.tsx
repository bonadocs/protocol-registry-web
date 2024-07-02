import { SelectInput } from "@/components/input/SelectInput";
import React, { ChangeEvent, useState, useEffect, use } from "react";
import { useProtocolContext } from "@/context/ProtocolContext";
import { tags, Option } from "../../data/data";

export const TagOptions: React.FC = () => {
  const { loading, currentSelection, updateCurrentSelection, searchResults } =
    useProtocolContext();

  const [option, setOption] = useState<Option | undefined>(
    tags.find((option) => option.value === (currentSelection.tags ?? [])[0]) ||
      tags[0]
  );

  const updateProtocolTypes = (event: ChangeEvent<HTMLSelectElement>) => {
    const tag = event.target.value;
    const selectedOption = tags.find((option) => option.value === tag);
    if (selectedOption?.value == "All") {
      updateCurrentSelection({
        pageSize: currentSelection.pageSize,
        chainIds: currentSelection.chainIds,
        page: currentSelection.page,
        q: currentSelection.q,
      });
    } else {
      updateCurrentSelection({
        ...currentSelection,
        tags: [selectedOption?.value || ""],
      });
    }
  };

  return (
    <SelectInput
      defaultOption={option}
      options={tags}
      updateOptions={updateProtocolTypes}
      optionName="Tags"
    />
  );
};
