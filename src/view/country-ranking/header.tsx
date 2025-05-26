import Search from "./search";

export default function Header() {
  return (
    <div className="w-full flex sm:flex-col lg:flex-row lg:justify-between lg:items-center py-5 gap-10">
      <span className="w-full lg:max-w-[340px] text-base font-semibold">
        Found 234 countries
      </span>
      <Search />
    </div>
  );
}
