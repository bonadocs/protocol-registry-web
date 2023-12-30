interface Option {
  value: string;
  label: string;
  id?: number;
}

export const options: Option[] = [
  { value: "Arbitrum", label: "Arbitrum", id: 42161 },
  { value: "Ethereum", label: "Ethereum", id: 1 },
  { value: "Optimism", label: "Optimism", id: 10 },
];
