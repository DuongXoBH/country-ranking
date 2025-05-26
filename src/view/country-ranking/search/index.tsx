import { Input } from "@/components/ui/input";
import { SearchStore } from "@/store";
import { useAtom } from "jotai";
import { SearchIcon } from "lucide-react";

export default function Search() {
  const [, setSearch] = useAtom(SearchStore);
  return (
    <div className="w-full lg:max-w-[340px] relative">
      <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-5">
        <SearchIcon className="text-white" />
      </div>
      <Input
        placeholder="Search by Name, Region, Subregion"
        className="h-[50px] pl-16 "
        onChange={(e) => setSearch(e.target.value)}
      />
    </div>
  );
}
