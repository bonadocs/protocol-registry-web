import { StaticImport } from "next/dist/shared/lib/get-img-props";

export interface Option {
  name?: string;
  image?: string | StaticImport;
  tag?: string;
}

