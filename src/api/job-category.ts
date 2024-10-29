import { BadgeProps } from "@/components/badge";
import { FetchHookReturn } from "@/utils/fetch";
import { IconName } from "@/utils/icon";

export type JobCategory = {
  id: number;
  icon: IconName;
  name: string;
  jobsAvailable: number;
  color: BadgeProps["color"];
};

const dump: JobCategory[] = [
  { id: 1, icon: "PencilRuler", name: "Design", jobsAvailable: 235, color: "green" },
  { id: 2, icon: "ChartArea", name: "Sales", jobsAvailable: 756, color: "red" },
  { id: 3, icon: "Speaker", name: "Marketing", jobsAvailable: 140, color: "yellow" },
  { id: 4, icon: "Banknote", name: "Finance", jobsAvailable: 325, color: "blue" },
  { id: 5, icon: "Computer", name: "Technology", jobsAvailable: 436, color:"red" },
  { id: 6, icon: "CodeXml", name: "Programmer", jobsAvailable: 542, color: "blue" },
  { id: 7, icon: "Briefcase", name: "Business", jobsAvailable: 211, color: "purple" },
  { id: 8, icon: "Users", name: "Human Resource", jobsAvailable: 346, color: "blue" },
];

export function useJobCategory(
  id: number,
): FetchHookReturn<JobCategory | null> {
  return {
    data: dump.find((s) => s.id == id) ?? null,
    isLoading: false,
    isError: false,
  };
}

export function useJobCategories(): FetchHookReturn<JobCategory[]> {
  return {
    data: dump,
    isLoading: false,
    isError: false,
  };
}
