import Header from "./header";
import { CountriesTable } from "./table";
import Filter from "./filter";

export default function CountryRanking() {
  return (
    <div className="w-[calc(100%-16px)] lg:w-[calc(100%-100px)] mx-2 lg:mx-[50px] bg-[#1C1D1F] border-[0.5px] border-[#1e293b] rounded-2xl">
      <div className="w-full p-1 lg:px-[50px] flex flex-col">
        <Header />
        <div className="w-full flex flex-col lg:flex-row">
          <Filter />
          <CountriesTable />
        </div>
      </div>
    </div>
  );
}
