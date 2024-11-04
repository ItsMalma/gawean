import { useCompaniesByMajor } from "@/api/company";
import { Major, useMajors } from "@/api/major";
import CompanyItem from "@/components/company-item";
import MajorItem from "@/components/major-item";
import { PencilRulerIcon } from "lucide-react";
import React from "react";

export default function CompaniesByMajor() {
  const { data: majors } = useMajors();
  const [selectedMajor, setSelectedMajor] = React.useState<Major["id"] | null>(
    null,
  );
  const { data: companies } = useCompaniesByMajor(selectedMajor ?? undefined);

  return (
    <section className="w-full flex flex-col gap-12 px-32 py-16 bg-neutral-1">
      <h3 className="font-bold text-neutral-6">
        Temukan Perusahaan Berdasarkan Jurusan
      </h3>
      <div className="flex gap-8">
        {majors.map((major) => (
          <MajorItem
            key={major.id}
            majorId={major.id}
            className="grow"
            onClick={() => {
              if (selectedMajor === major.id) {
                setSelectedMajor(null);
              } else {
                setSelectedMajor(major.id);
              }
            }}
            active={selectedMajor === major.id}
          />
        ))}
      </div>
      <div className="flex flex-col gap-6">
        <div className="flex gap-4 items-center">
          <div className="size-14 flex justify-center items-center rounded-full bg-white">
            <PencilRulerIcon className="size-6 text-primary" />
          </div>
          <h4 className="font-bold text-neutral-7">
            {companies.length} Tersedia
          </h4>
        </div>
        <div className="grid grid-cols-4 gap-x-8 gap-y-6">
          {companies.slice(0, 8).map((job) => (
            <CompanyItem key={job.id} companyId={job.id} />
          ))}
        </div>
      </div>
    </section>
  );
}
