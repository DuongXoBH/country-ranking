import RegionFilter from "./region-filter";
import StatusFilter from "./status-filter";

export default function Filter() {
  return (
    <div className="w-full lg:max-w-[254px] xl:max-w-[280px] space-y-10">
      <RegionFilter />
      <StatusFilter />
    </div>
  );
}
