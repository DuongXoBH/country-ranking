export interface ICountryResponse {
  name: {
    common: string;
    official: string;
  };
  flags: {
    png: string;
    svg: string;
  };
  population: number;
  area: number;
  region: string;
  subregion?: string;
  independent: boolean;
  unMember: boolean;
  capital?: string[];
  ccn3: string;
}
