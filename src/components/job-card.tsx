import { useJob } from "@/api/job";
import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import Tag from "./tag";
import Badge from "./badge";
import { useMajors } from "@/api/major";

export type JobCardProps = React.AnchorHTMLAttributes<HTMLAnchorElement> & {
  variant: "compact" | "medium";
  jobId: number;
};

function CompactJobCard({ jobId: jobId, className, ...props }: JobCardProps) {
  const { data: job } = useJob(jobId);
  const { data: majors } = useMajors(job?.majors);

  return (
    <Link
      href={`/jobs/${jobId}`}
      className={clsx(
        "flex flex-col gap-4 p-6 bg-white border border-neutral-2",
        className,
      )}
      {...props}
    >
      <div className="w-full flex justify-between">
        <Image
          src={
            job?.logo ??
            "https://placehold.co/48/2563EB/white?text=404&font=Open+Sans"
          }
          alt={job ? `Logo perusahaan ${job.company}` : "Logo tidak ditemukan"}
          width={48}
          height={48}
        />
        <Tag text={job?.employmentType ?? "Tidak Ditemukan"} />
      </div>
      <div className="flex flex-col gap-0.5">
        <p className="font-semibold text-lg">
          {job?.position ?? "Tidak Ditemukan"}
        </p>
        <div className="w-fit flex justify-center items-center gap-2 text-neutral-5">
          <p>{job?.company ?? "Tidak Ditemukan"}</p>
          <span className="size-1 roundd-full bg-neutral-5/30" />
          <p>{job?.location ?? "Tidak Ditemukan"}</p>
        </div>
      </div>
      <p className="text-neutral-4 line-clamp-2">
        {job?.description ?? "Tidak Ditemukan"}
      </p>
      <div className="flex gap-2">
        {(majors ?? []).map((major) => (
          <Badge key={major.id} color={major.color} text={major.name} />
        ))}
      </div>
    </Link>
  );
}

function MediumJobCard({ jobId: jobId, className, ...props }: JobCardProps) {
  const { data: job } = useJob(jobId);
  const { data: majors } = useMajors(job?.majors);

  return (
    <Link
      href={`/jobs/${jobId}`}
      className={clsx("flex items-start gap-6 px-10 py-6 bg-white", className)}
      {...props}
    >
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
          <p>{job?.company ?? "Tidak Ditemukan"}</p>
          <span className="size-1 roundd-full bg-neutral-5/30" />
          <p>{job?.location ?? "Tidak Ditemukan"}</p>
        </div>
        <div className="flex gap-2">
          <Badge
            color="green"
            text={job?.employmentType ?? "Tidak Ditemukan"}
          />
          <span className="w-[1px] self-stretch bg-neutral-2" />
          {(majors ?? []).map((major) => (
            <Badge key={major.id} color={major.color} text={major.name} />
          ))}
        </div>
      </div>
    </Link>
  );
}

export default function JobCard({ variant, ...props }: JobCardProps) {
  switch (variant) {
    case "compact":
      return <CompactJobCard variant="compact" {...props} />;
    case "medium":
      return <MediumJobCard variant="medium" {...props} />;
  }
}
