import { chains } from "./chains";

export interface Option {
  value: string;
  label: string;
  id?: number;
}

export const chainOptions: Option[] = chains.map((chain) => {
  const [_, chainSlug, chainId] = chain.match(/(\S+): .+ \((\d+)\)/) || [];
  return { value: chainSlug, label: chainSlug, id: parseInt(chainId) };
});

export const tags = [
  { value: "All", label: "All" },
  { value: "exchange", label: "Exchange" },
  { value: "lending", label: "Lending" },
  { value: "infrastructure", label: "Infrastructure" },
  { value: "stablecoin", label: "Stablecoin" },
  { value: "staking", label: "Staking" },
  { value: "yield", label: "Yield" },
];