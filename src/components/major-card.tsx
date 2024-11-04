import { useJobsByMajor } from "@/api/job";
import { useMajor } from "@/api/major";
import clsx from "clsx";
import { ArrowRightIcon, icons } from "lucide-react";
import Link from "next/link";
import React from "react";

export type MajorCardProps = React.AnchorHTMLAttributes<HTMLAnchorElement> & {
  majorId: number;
};

export default function MajorCard({
  majorId,
  className,
  ...props
}: MajorCardProps) {
  const { data: major } = useMajor(majorId);
  const { data: jobs } = useJobsByMajor(major?.id);

  const Icon = icons[major?.icon ?? "ImageOff"];

  return (
    <Link
      href={`/jobs/${majorId}`}
      className={clsx(
        "group flex flex-col gap-8 p-8 bg-white border border-neutral-2 hover:bg-primary active:bg-primary transition-colors duration-300",
        className,
      )}
      {...props}
    >
      <Icon className="size-12 text-primary group-hover:text-white group-active:text-white transition-colors duration-300" />
      <div className="flex flex-col gap-3 justify-center">
        <h4 className="text-neutral-6 group-hover:text-white group-active:text-white transition-colors duration-300">
          {major?.name ?? "Not Found"}
        </h4>
        <div className="flex gap-4 items-center">
          <p className="text-lg text-neutral-4 group-hover:text-white group-active:text-white transition-colors duration-300">
            {jobs?.length ?? 0} loker tersedia
          </p>
          <ArrowRightIcon className="size-6 text-neutral-6 group-hover:text-white group-active:text-white transition-colors duration-300" />
        </div>
      </div>
    </Link>
  );
}
