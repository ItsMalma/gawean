import { useJobCategory } from "@/api/job-category";
import clsx from "clsx";
import { ArrowRightIcon, icons } from "lucide-react";
import Link from "next/link";
import React from "react";

export type JobCategoryCardProps =
  React.AnchorHTMLAttributes<HTMLAnchorElement> & {
    jobCategoryId: number;
  };

export default function JobCategoryCard({
  jobCategoryId,
  className,
  ...props
}: JobCategoryCardProps) {
  const { data: jobCategory } = useJobCategory(jobCategoryId);

  const Icon = icons[jobCategory?.icon ?? "ImageOff"];

  return (
    <Link
      href={`/jobs/${jobCategoryId}`}
      className={clsx(
        "group flex flex-col gap-8 p-8 bg-white border border-neutral-2 hover:bg-primary active:bg-primary transition-colors duration-300",
        className,
      )}
      {...props}
    >
      <Icon className="size-12 text-primary group-hover:text-white group-active:text-white transition-colors duration-300" />
      <div className="flex flex-col gap-3 justify-center">
        <h4 className="text-neutral-6 group-hover:text-white group-active:text-white transition-colors duration-300">
          {jobCategory?.name ?? "Not Found"}
        </h4>
        <div className="flex gap-4 items-center">
          <p className="text-lg text-neutral-4 group-hover:text-white group-active:text-white transition-colors duration-300">
            {jobCategory?.jobsAvailable ?? 0} jobs available
          </p>
          <ArrowRightIcon className="size-6 text-neutral-6 group-hover:text-white group-active:text-white transition-colors duration-300" />
        </div>
      </div>
    </Link>
  );
}
