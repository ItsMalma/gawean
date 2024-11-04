import { useCompany } from "@/api/company";
import { useJobsByCompany } from "@/api/job";
import { useMajors } from "@/api/major";
import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import Tag from "./tag";
import Badge from "./badge";

export type CompanyCardProps = React.AnchorHTMLAttributes<HTMLAnchorElement> & {
  companyId: number;
};

export default function CompanyCard({
  companyId,
  className,
  ...props
}: CompanyCardProps) {
  const { data: company } = useCompany(companyId);
  const { data: jobs } = useJobsByCompany(company?.id);
  const { data: majors } = useMajors(company?.majors);

  return (
    <Link
      href={`/companies/${companyId}`}
      className={clsx(
        "group flex flex-col gap-4 p-6 bg-white border border-neutral-2",
        className,
      )}
      {...props}
    >
      <div className="flex justify-between items-start">
        <Image
          src={
            company?.logo ??
            "https://placehold.co/88/2563EB/white?text=404&font=Open+Sans"
          }
          alt={
            company ? `Logo perusahaan ${company.name}` : "Logo tidak ditemukan"
          }
          width={88}
          height={88}
        />
        <Tag filled text={`${jobs.length ?? 0} Pekerjaan`} />
      </div>
      <div className="grow flex flex-col gap-4">
        <h4 className="font-geist font-bold text-neutral-6">
          {company?.name ?? "Tidak Ditemukan"}
        </h4>
        <p className="text-lg text-neutral-5">
          {company?.description ?? "Tidak Ditemukan"}
        </p>
      </div>
      <div className="flex gap-4">
        {majors.map((major) => (
          <Badge key={major.id} text={major.name} color={major.color} />
        ))}
      </div>
    </Link>
  );
}
