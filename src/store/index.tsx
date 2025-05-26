import { atom } from "jotai";

export type TFilterCountry = {
  region: string;
  status: string;
};
export const CountryFilterStore = atom<TFilterCountry | undefined>({
  region: "All",
  status: "All",
});
export const SearchStore = atom("");
