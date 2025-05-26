import { AxiosError } from "axios";
import { useQuery } from "@tanstack/react-query";
import type { ICountryResponse } from "@/types";
import { useApiToastError } from "@/hooks/use-api-toast-error";
import { api } from "@/lib/api";

const getCountries = async () => {
  const { data } = await api.get<ICountryResponse[]>(`/all/`);
  return data;
};

export const useGetCountries = () => {
  const query = useQuery<ICountryResponse[], AxiosError>({
    queryKey: ["getCountries"],
    queryFn: () => getCountries(),
  });
  useApiToastError(query.isError, query?.error?.message ?? "");

  return query;
};
