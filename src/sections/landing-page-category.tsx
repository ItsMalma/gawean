import JobCategoryCard from "@/components/job-category-card";
import { ArrowRightIcon } from "lucide-react";
import Link from "next/link";

export default function LandingPageCategory() {
  return (
    <section className="w-full flex flex-col gap-12 px-32 pt-16 bg-white">
      <div className="flex justify-between items-end">
        <h2 className="text-neutral-6 font-bold">
          Jelajahi berdasarkan <span className="text-blue">kategori</span>
        </h2>
        <Link href="/jobs" className="flex gap-4 items-center justify-end">
          <p className="font-semibold text-base text-primary">
            Lihat semua pekerjaan
          </p>
          <ArrowRightIcon className="size-4 text-primary" />
        </Link>
      </div>
      <div className="w-full grid grid-cols-4 gap-8">
        <JobCategoryCard jobCategoryId={1} />
        <JobCategoryCard jobCategoryId={2} />
        <JobCategoryCard jobCategoryId={3} />
        <JobCategoryCard jobCategoryId={4} />
        <JobCategoryCard jobCategoryId={5} />
        <JobCategoryCard jobCategoryId={6} />
        <JobCategoryCard jobCategoryId={7} />
        <JobCategoryCard jobCategoryId={8} />
      </div>
    </section>
  );
}
