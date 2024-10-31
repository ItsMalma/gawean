import JobCard from "@/components/job-card";
import { ArrowRightIcon } from "lucide-react";
import Link from "next/link";

export default function LatestJobs() {
  return (
    <section className="relative w-full flex flex-col gap-12 px-32 py-16 bg-neutral-1 overflow-hidden">
      <svg
        width="797"
        height="877"
        viewBox="0 0 797 877"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="absolute top-0 right-0 z-0"
      >
        <path
          opacity="0.6"
          d="M328.972 -72.173L615.806 -212.02L617.987 -3.74798L329.227 135.94L328.972 -72.173Z"
          fill="#F8F8FD"
          stroke="#CCCCF5"
          strokeWidth="4"
        />
        <path
          d="M261.005 590.224L816.767 306.268L816.767 646.273L261.229 928.43L261.005 590.224Z"
          fill="#F8F8FD"
          stroke="#CCCCF5"
          strokeWidth="4"
        />
        <path
          d="M2.00481 957.244L517.767 703.214L517.767 1013.25L2.22902 1265.48L2.00481 957.244Z"
          fill="#F8F8FD"
          stroke="#CCCCF5"
          strokeWidth="4"
        />
      </svg>
      <div className="flex justify-between items-end z-10">
        <h2 className="text-neutral-6 font-bold">
          <span className="text-blue">Loker</span> terkini
        </h2>
        <Link href="/jobs" className="flex gap-4 items-center justify-end">
          <p className="font-semibold text-base text-primary">
            Lihat semua pekerjaan
          </p>
          <ArrowRightIcon className="size-4 text-primary" />
        </Link>
      </div>
      <div className="w-full grid grid-cols-2 gap-x-8 gap-y-4 z-10">
        <JobCard variant="medium" jobId={9} />
        <JobCard variant="medium" jobId={10} />
        <JobCard variant="medium" jobId={2} />
        <JobCard variant="medium" jobId={11} />
        <JobCard variant="medium" jobId={12} />
        <JobCard variant="medium" jobId={13} />
        <JobCard variant="medium" jobId={14} />
        <JobCard variant="medium" jobId={15} />
      </div>
    </section>
  );
}
