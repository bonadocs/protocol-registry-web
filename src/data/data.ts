import { chains } from "./chains";

interface Option {
  value: string;
  label: string;
  id?: number;
}

export const chainOptions: Option[] = chains.map((chain) => {
  const [_, chainSlug, chainId] = chain.match(/(\S+): .+ \((\d+)\)/) || [];
  return { value: chainSlug, label: chainSlug, id: parseInt(chainId) };
});
