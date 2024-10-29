import JobCard from "@/components/job-card";
import { ArrowRightIcon } from "lucide-react";
import Link from "next/link";

export default function LandingPageFeaturedJobs() {
  return (
    <section className="w-full flex flex-col gap-12 px-32 pb-16 bg-white">
      <div className="flex justify-between items-end">
        <h2 className="text-neutral-6 font-bold">
          <span className="text-blue">Loker</span> terpopuler
        </h2>
        <Link href="/jobs" className="flex gap-4 items-center justify-end">
          <p className="font-semibold text-base text-primary">
            Lihat semua pekerjaan
          </p>
          <ArrowRightIcon className="size-4 text-primary" />
        </Link>
      </div>
      <div className="w-full grid grid-cols-4 gap-8">
        <JobCard variant="compact" jobId={1} />
        <JobCard variant="compact" jobId={2} />
        <JobCard variant="compact" jobId={3} />
        <JobCard variant="compact" jobId={4} />
        <JobCard variant="compact" jobId={5} />
        <JobCard variant="compact" jobId={6} />
        <JobCard variant="compact" jobId={7} />
        <JobCard variant="compact" jobId={8} />
      </div>
    </section>
  );
}
