import type { ICountryResponse } from "@/types";
import type { ColumnDef } from "@tanstack/react-table";

export const countriesColumns: ColumnDef<ICountryResponse>[] = [
  {
    accessorKey: "flags",
    header: () => {
      return "Flags";
    },
    cell: ({ row }) => {
      const flags = row.original.flags;

      return <img src={flags.png} alt="" width={55} height={40} />;
    },
    enableSorting: false,
    meta: "w-[14%]",
  },
  {
    accessorKey: "name",
    header: () => {
      return "Name";
    },
    cell: ({ row }) => {
      const name = row.original.name;

      return <div className="w-full overflow-x-hidden">{name.common}</div>;
    },
    meta: "w-[24%]",
  },
  {
    accessorKey: "population",
    header: () => {
      return "Population";
    },
    cell: ({ row }) => {
      const population = row.original.population;

      return <p className="pl-2.5">{population.toLocaleString()}</p>;
    },
    meta: "w-[24%]",
  },
  {
    accessorKey: "area",
    header: () => {
      return (
        <span>
          Area (km<sup>2</sup>)
        </span>
      );
    },
    cell: ({ row }) => {
      const area = row.original.area;

      return <p>{area.toLocaleString()}</p>;
    },
    meta: "w-[24%]",
  },
  {
    accessorKey: "region",
    header: () => {
      return <span className="">Region</span>;
    },
    cell: ({ row }) => {
      const region = row.original.region;

      return <span className="">{region}</span>;
    },
    meta: "xl:w-[14%]",
  },
];
