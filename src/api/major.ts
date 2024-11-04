import { Color } from "@/utils/color";
import { FetchHookReturn } from "@/utils/fetch";
import { IconName } from "@/utils/icon";

export type Major = {
  id: number;
  icon: IconName;
  name: string;
  color: Color;
};

const dump: Major[] = [
  { id: 1, icon: "Wrench", name: "Mesin", color: "red" },
  {
    id: 2,
    icon: "HardHat",
    name: "Sipil",
    color: "green",
  },
  {
    id: 3,
    icon: "Cable",
    name: "Listrik",
    color: "yellow",
  },
  {
    id: 4,
    icon: "Computer",
    name: "RPL",
    color: "blue",
  },
];

export function useMajor(id: Major["id"]): FetchHookReturn<Major | null> {
  return {
    data: dump.find((major) => major.id == id) ?? null,
    isError: false,
    isLoading: false,
  };
}

export function useMajors(ids?: Major["id"][]): FetchHookReturn<Major[]> {
  if (ids !== undefined) {
    return {
      data: dump.filter((major) => ids.includes(major.id)),
      isError: false,
      isLoading: false,
    };
  }

  return {
    data: dump,
    isError: false,
    isLoading: false,
  };
}
