import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { cn } from "@/lib/utils";
import { CountryFilterStore } from "@/store";
import { useAtom } from "jotai";

export default function RegionFilter() {
  const [filter, setFilter] = useAtom(CountryFilterStore);

  const regions = [
    "Americas",
    "Antarctic",
    "Africa",
    "Asia",
    "Europe",
    "Oceania",
  ];
  return (
    <div className="w-full">
      <Label className="text-gray-300 text-sm font-medium mb-4">Region</Label>

      <div className="grid grid-cols-2 gap-3">
        {regions.map((region) => (
          <Button
            key={region}
            onClick={() =>
              setFilter((prev) => {
                return {
                  ...prev,
                  region: prev?.region === region ? "All" : region,
                  status: prev?.status ?? "All",
                };
              })
            }
            className={cn(
              "px-4 py-3 rounded-md text-sm font-medium transition-all duration-200 cursor-pointer",
              filter?.region === region
                ? "bg-blue-600 text-white hover:bg-gray-700 shadow-md"
                : "bg-gray-500 text-gray-300 hover:bg-gray-700 hover:text-white"
            )}
          >
            {region}
          </Button>
        ))}
      </div>
    </div>
  );
}
