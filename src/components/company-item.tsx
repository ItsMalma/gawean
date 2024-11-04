import { useCompany } from "@/api/company";
import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import Tag from "./tag";
import { useJobsByCompany } from "@/api/job";

export type CompanyItemProps = React.AnchorHTMLAttributes<HTMLAnchorElement> & {
  companyId: number;
};

export default function CompanyItem({
  companyId,
  className,
  ...props
}: CompanyItemProps) {
  const { data: company } = useCompany(companyId);
  const { data: jobs } = useJobsByCompany(companyId);

  return (
    <Link
      href={`/companies/${companyId}`}
      className={clsx(
        "group h-72 flex flex-col gap-8 justify-start items-center p-6 bg-white border border-neutral-2",
        className,
      )}
      {...props}
    >
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
      <div className="grow flex flex-col gap-4 items-center text-center">
        <h4 className="grow font-geist font-bold text-neutral-6">
          {company?.name ?? "Tidak Ditemukan"}
        </h4>
        <Tag filled text={`${jobs.length ?? 0} Pekerjaan`} />
      </div>
    </Link>
  );
}
