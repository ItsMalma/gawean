import { useJobs } from "@/api/job";
import Checkbox from "@/components/checkbox";
import JobItem from "@/components/job-item";
import Pagination from "@/components/pagination";
import usePagination from "@/hooks/use-pagination";
import {
  Combobox,
  ComboboxButton,
  ComboboxInput,
  ComboboxOption,
  ComboboxOptions,
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from "@headlessui/react";
import { ChevronDownIcon } from "lucide-react";
import React from "react";

type FilterItem = {
  name: string;
  total: number;
};

type Filter = {
  name: string;
  items: FilterItem[];
};

const filters: Filter[] = [
  {
    name: "Type of Employment",
    items: [
      { name: "Full-Time", total: 3 },
      { name: "Part-Time", total: 5 },
      { name: "Remote", total: 2 },
      { name: "Internship", total: 24 },
      { name: "Contract", total: 3 },
    ],
  },
  {
    name: "Categories",
    items: [
      { name: "Design", total: 24 },
      { name: "Sales", total: 3 },
      { name: "Marketing", total: 3 },
      { name: "Business", total: 3 },
      { name: "Human Resource", total: 6 },
      { name: "Finance", total: 4 },
      { name: "Engineering", total: 4 },
      { name: "Technology", total: 5 },
    ],
  },
  {
    name: "Job Level",
    items: [
      { name: "Entry Level", total: 57 },
      { name: "Mid Level", total: 3 },
      { name: "Senior Level", total: 5 },
      { name: "Director", total: 12 },
      { name: "VP or Above", total: 8 },
    ],
  },
  {
    name: "Salary Range",
    items: [
      { name: "$700 - $1000", total: 4 },
      { name: "$1000 - $1500", total: 6 },
      { name: "$1500 - $2000", total: 10 },
      { name: "$2000 or above", total: 4 },
    ],
  },
];

type SortBy = "Paling relevan" | "Paling terbaru";

export default function JobList() {
  const { data: jobs } = useJobs();

  const [sortBy, setSortBy] = React.useState<SortBy>("Paling relevan");

  const pagination = usePagination(jobs);

  return (
    <section className="w-full flex gap-10 px-32 py-16 bg-white">
      <div className="basis-1/5 w-full flex flex-col gap-10">
        {filters.map((filter) => (
          <Disclosure key={filter.name}>
            <div className="w-full flex flex-col gap-5">
              <DisclosureButton className="group w-full flex items-center justify-between text-neutral-6">
                <p className="font-bold leading-6">{filter.name}</p>
                <ChevronDownIcon className="size-5 transition-transform duration-300 group-data-[open]:rotate-180" />
              </DisclosureButton>
              <DisclosurePanel
                transition
                className="flex flex-col gap-5 origin-top transition duration-300 ease-out data-[closed]:-translate-y-6 data-[closed]:opacity-0"
              >
                {filter.items.map((filterItem) => (
                  <Checkbox
                    key={filterItem.name}
                    label={`${filterItem.name} (${filterItem.total})`}
                  />
                ))}
              </DisclosurePanel>
            </div>
          </Disclosure>
        ))}
      </div>
      <div className="grow w-full flex flex-col justify-center items-center gap-8">
        <div className="w-full flex justify-between">
          <div className="flex flex-col gap-1">
            <h3 className="font-bold text-neutral-6">Daftar Loker</h3>
            <p className="text-neutral-4">Menampilkan {jobs.length} hasil</p>
          </div>
          <div className="flex gap-6 justify-center items-center">
            <div className="flex gap-3 items-center">
              <p className="text-neutral-4">Urutkan berdasarkan:</p>
              <Combobox
                immediate
                defaultValue="Paling relevan"
                value={sortBy}
                onChange={(value) => setSortBy(value ?? "Paling relevan")}
              >
                <div className="flex gap-2 items-center">
                  <ComboboxInput<SortBy> className="font-medium text-neutral-6" />
                  <ComboboxButton className="group">
                    <ChevronDownIcon className="size-4 text-primary transition-transform duration-300 ease-in group-data-[open]:rotate-180" />
                  </ComboboxButton>
                </div>
                <ComboboxOptions
                  anchor="bottom start"
                  transition
                  className="w-[var(--input-width)] bg-white border border-neutral-2 z-50 empty:invisible transition duration-300 ease-in data-[leave]:data-[closed]:opacity-0"
                >
                  <ComboboxOption
                    value="Paling relevan"
                    className="px-4 py-2 text-neutral-6 select-none hover:bg-neutral-1"
                  >
                    Paling relevan
                  </ComboboxOption>
                  <ComboboxOption
                    value="Paling terbaru"
                    className="px-4 py-2 text-neutral-6 select-none hover:bg-neutral-1"
                  >
                    Paling terbaru
                  </ComboboxOption>
                </ComboboxOptions>
              </Combobox>
            </div>
          </div>
        </div>
        <div className="grow w-full flex flex-col gap-4">
          {pagination.data.map((job) => (
            <JobItem key={job.id} jobId={job.id} />
          ))}
        </div>
        <Pagination pagination={pagination} />
      </div>
    </section>
  );
}
