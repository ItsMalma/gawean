import { JobLocation, useJobLocations } from "@/api/job-location";
import {
  Combobox,
  ComboboxButton,
  ComboboxInput,
  ComboboxOption,
  ComboboxOptions,
} from "@headlessui/react";
import clsx from "clsx";
import { ChevronDownIcon, MapPinIcon, SearchIcon } from "lucide-react";
import React from "react";
import Button from "./button";

export type JobSearchProps = React.HTMLAttributes<HTMLDivElement> & {};

export default function JobSearch({ className, ...props }: JobSearchProps) {
  const { data: locations } = useJobLocations();

  const [selectedLocation, setSelectedLocation] =
    React.useState<JobLocation | null>(null);

  return (
    <div
      className={clsx(
        "flex gap-8 justify-center items-center px-8 py-4 bg-white",
        className,
      )}
      {...props}
    >
      <div className="grow flex gap-4 items-center">
        <SearchIcon className="size-6 text-neutral-6" />
        <input
          type="text"
          className="grow h-14 border-b border-neutral-2 placeholder:text-neutral-4 text-neutral-6"
        />
      </div>
      <div className="grow flex gap-4 items-center">
        <MapPinIcon className="size-6 text-neutral-6" />
        <Combobox value={selectedLocation} onChange={setSelectedLocation}>
          <div className="grow relative">
            <ComboboxInput<JobLocation>
              displayValue={(location) => location?.name}
              className="w-full h-14 border-b border-neutral-2 placeholder:text-neutral-4 text-neutral-6"
            />
            <ComboboxButton className="group absolute inset-y-0 right-0 px-2.5">
              <ChevronDownIcon className="size-4 text-neutral-4 transition-transform duration-300 ease-in group-data-[open]:rotate-180" />
            </ComboboxButton>
          </div>
          <ComboboxOptions
            anchor="bottom start"
            transition
            className="w-[var(--input-width)] bg-white border border-neutral-2 z-50 empty:invisible transition duration-300 ease-in data-[leave]:data-[closed]:opacity-0"
          >
            {locations.map((location) => (
              <ComboboxOption
                key={location.id}
                value={location}
                className="px-4 py-2 text-neutral-6 select-none hover:bg-neutral-1"
              >
                {location.name}
              </ComboboxOption>
            ))}
          </ComboboxOptions>
        </Combobox>
      </div>
      <Button text="Cari Pekerjaan" />
    </div>
  );
}
