import { FetchHookReturn } from "@/utils/fetch";

export type Location = {
  id: number;
  name: string;
};

const dump: Location[] = [
  { id: 1, name: "Jakarta" },
  { id: 2, name: "Surabaya" },
  { id: 3, name: "Depok" },
  { id: 4, name: "Bandung" },
  { id: 5, name: "Solo" },
  { id: 6, name: "Tangerang" },
  { id: 7, name: "Bogor" },
  { id: 8, name: "Bekasi" },
  { id: 9, name: "Semarang" },
  { id: 10, name: "Yogyakarta" },
];

export function useLocations(): FetchHookReturn<Location[]> {
  return {
    data: dump,
    isLoading: false,
    isError: false,
  };
}
