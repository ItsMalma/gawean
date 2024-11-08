import { useCompanies } from "@/api/company";
import Checkbox from "@/components/checkbox";
import CompanyCard from "@/components/company-card";
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
    name: "Jurusan",
    items: [
      { name: "Mesin", total: 24 },
      { name: "Sipil", total: 3 },
      { name: "Listrik", total: 3 },
      { name: "RPL", total: 3 },
    ],
  },
  {
    name: "Jumlah Karyawan",
    items: [
      { name: "1-50", total: 25 },
      { name: "51-100", total: 25 },
      { name: "101-250", total: 25 },
      { name: "251-500", total: 25 },
      { name: "501-1000", total: 25 },
      { name: "1001-above", total: 25 },
    ],
  },
];

type SortBy = "Paling relevan" | "Paling terbaru";

export default function CompanyList() {
  const { data: companies } = useCompanies();

  const [sortBy, setSortBy] = React.useState<SortBy>("Paling relevan");

  const pagination = usePagination(companies);

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
            <h3 className="font-bold text-neutral-6">Daftar Perusahaan</h3>
            <p className="text-neutral-4">
              Menampilkan {companies.length} hasil
            </p>
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
        <div className="grow w-full grid grid-cols-2 gap-8">
          {pagination.data.map((company) => (
            <CompanyCard key={company.id} companyId={company.id} />
          ))}
        </div>
        <Pagination pagination={pagination} />
      </div>
    </section>
  );
}
