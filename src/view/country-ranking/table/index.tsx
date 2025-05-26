import { useEffect, useState } from "react";
import {
  useReactTable,
  getCoreRowModel,
  flexRender,
  getPaginationRowModel,
  //   type ColumnDef,
  type PaginationState,
  type SortingState,
  getSortedRowModel,
} from "@tanstack/react-table";
import { Loader } from "lucide-react";
import { cn, filterCountriesFunction, searchFunction } from "@/lib/utils";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { DataTablePagination } from "./data-table-pagination";
import { useGetCountries } from "@/apis/use-get-countries";
import { countriesColumns } from "./columns";
import { useAtom } from "jotai";
import type { ICountryResponse } from "@/types";
import { CountryFilterStore, SearchStore } from "@/store";

export function CountriesTable() {
  const [pagination, setPagination] = useState<PaginationState>({
    pageIndex: 0,
    pageSize: 10,
  });
  const [sorting, setSorting] = useState<SortingState>([
    {
      id: "population",
      desc: true,
    },
  ]);
  const [currentCountries, setCurrentCountries] =
    useState<ICountryResponse[]>();
  const [filterCountries] = useAtom(CountryFilterStore);
  const [searchValue] = useAtom(SearchStore);
  const { data: countries, isPending } = useGetCountries();

  useEffect(() => {
    const filter = filterCountriesFunction(
      countries ?? [],
      filterCountries ?? { region: "", status: "" }
    );
    const search = searchFunction(filter, searchValue);

    setCurrentCountries(search);
  }, [filterCountries, countries, searchValue]);

  const table = useReactTable({
    data: currentCountries ?? [],
    columns: countriesColumns,
    state: { pagination, sorting },
    enableRowSelection: true,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    onSortingChange: (updaterOrValue) => {
      if (typeof updaterOrValue === "function") {
        setSorting(updaterOrValue(sorting ?? []));
      } else {
        setSorting(updaterOrValue);
      }
    },
    onPaginationChange: setPagination
      ? (updaterOrValue) => {
          if (typeof updaterOrValue === "function") {
            setPagination((prev) => updaterOrValue(prev as PaginationState));
          } else {
            setPagination(updaterOrValue);
          }
        }
      : undefined,
  });

  if (isPending)
    return (
      <div className="flex size-full flex-col items-center justify-center xl:min-h-[60vh]">
        <Loader className="size-30 animate-spin" />
        Loading
      </div>
    );

  return (
    <div className="max-w-full overflow-auto px-[50px]">
      <Table className="min-w-full overflow-hidden px-5">
        <TableHeader>
          {table.getHeaderGroups().map((headerGroup) => (
            <TableRow key={headerGroup.id} className="h-[58px] border-b">
              {headerGroup.headers.map((header) => (
                <TableHead
                  key={header.id}
                  className={cn(
                    "cursor-pointer p-2 text-left text-white text-sm font-medium capitalize",
                    header.column.columnDef.meta
                  )}
                  onClick={header.column.getToggleSortingHandler()}
                >
                  {flexRender(
                    header.column.columnDef.header,
                    header.getContext()
                  )}
                </TableHead>
              ))}
            </TableRow>
          ))}
        </TableHeader>
        <TableBody>
          {table.getRowModel().rows.map((row) => (
            <TableRow key={row.id}>
              {row.getVisibleCells().map((cell) => (
                <TableCell
                  key={cell.id}
                  style={{ width: cell.column.getSize() }}
                  className="h-[58px] max-w-[230px] p-2 text-left text-white text-sm font-medium capitalize overflow-x-hidden"
                >
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <DataTablePagination table={table} />
    </div>
  );
}
