import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { useAtom } from "jotai";
import { CountryFilterStore } from "@/store";

export default function StatusFilter() {
  const [, setFilter] = useAtom(CountryFilterStore);
  return (
    <div className="w-full">
      <Label className="text-gray-300 text-sm font-medium mb-4">Status</Label>
      <RadioGroup
        defaultValue="All"
        onValueChange={(value) =>
          setFilter((prev) => {
            return {
              ...prev,
              region: prev?.region ?? "All",
              status: value,
            };
          })
        }
      >
        <div className="flex items-center space-x-2">
          <RadioGroupItem value="All" />
          <Label htmlFor="r1">All</Label>
        </div>
        <div className="flex items-center space-x-2">
          <RadioGroupItem value="Independent" />
          <Label htmlFor="r2">Independent</Label>
        </div>
        <div className="flex items-center space-x-2">
          <RadioGroupItem value="UN Member" />
          <Label htmlFor="r3">Member of the United Nations</Label>
        </div>
      </RadioGroup>
    </div>
  );
}
