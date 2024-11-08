import { useJob } from "@/api/job";
import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import Badge from "./badge";
import Button from "./button";
import ProgressBar from "./progress-bar";
import { useMajors } from "@/api/major";
import { useCompany } from "@/api/company";

export type JobItemProps = React.AnchorHTMLAttributes<HTMLAnchorElement> & {
  jobId: number;
};

export default function JobItem({
  jobId: jobId,
  className,
  ...props
}: JobItemProps) {
  const { data: job } = useJob(jobId);
  const { data: majors } = useMajors(job?.majors);
  const { data: company } = useCompany(job?.company);

  return (
    <Link
      href={`/jobs/${jobId}`}
      className={clsx(
        "flex justify-between items-center p-6 bg-white border border-neutral-2",
        className,
      )}
      {...props}
    >
      <div className="flex items-start gap-6 bg-white">
        <Image
          src={
            job?.logo ??
            "https://placehold.co/48/2563EB/white?text=404&font=Open+Sans"
          }
          alt={job ? `Logo perusahaan ${job.company}` : "Logo tidak ditemukan"}
          width={48}
          height={48}
        />
        <div className="grow flex flex-col gap-2">
          <p className="font-semibold text-xl leading-[1.2em]">
            {job?.position ?? "Tidak Ditemukan"}
          </p>
          <div className="w-fit flex justify-center items-center gap-2 text-neutral-5">
            <p>{company?.name ?? "Tidak Ditemukan"}</p>
            <span className="size-1 roundd-full bg-neutral-5/30" />
            <p>{job?.location ?? "Tidak Ditemukan"}</p>
          </div>
          <div className="flex gap-2">
            <Badge
              color="purple"
              text={job?.employmentType ?? "Tidak Ditemukan"}
            />
            {(majors ?? []).map((major) => (
              <Badge key={major.id} color={major.color} text={major.name} />
            ))}
          </div>
        </div>
      </div>
      <div className="w-40 h-full flex flex-col justify-between">
        <Button text="Lamar" className="w-full" />
        <div className="flex flex-col gap-2">
          <ProgressBar
            className="w-full"
            value={job ? (job.applied / job.capacity) * 100 : 0}
          />
          <p className="text-sm text-neutral-4">
            <span className="text-neutral-6 font-semibold">
              {job?.applied ?? 0} applied
            </span>{" "}
            of {job?.capacity ?? 0} capacity
          </p>
        </div>
      </div>
    </Link>
  );
}
