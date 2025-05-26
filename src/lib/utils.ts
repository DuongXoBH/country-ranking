import type { TFilterCountry } from "@/store";
import type { ICountryResponse } from "@/types";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const filterCountriesFunction = (
  countries: ICountryResponse[],
  filter: TFilterCountry
): ICountryResponse[] => {
  return filter
    ? countries?.filter((country) => {
        const matchRegion =
          filter.region === "All" || country.region === filter.region;

        const matchStatus =
          filter.status === "All" ||
          (filter.status === "Independent" && country.independent === true) ||
          (filter.status === "UN Member" && country.unMember === true);

        return matchRegion && matchStatus;
      })
    : countries;
};

export const searchFunction = (
  countries: ICountryResponse[],
  value: string
) => {
  return value
    ? countries.filter((country) => {
        return (
          country.name.common.toLowerCase().includes(value.toLowerCase()) ||
          country.region.toLowerCase().includes(value.toLowerCase()) ||
          country.subregion?.toLowerCase().includes(value.toLowerCase())
        );
      })
    : countries;
};
