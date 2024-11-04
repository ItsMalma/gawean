import MajorCard from "@/components/major-card";
import { ArrowRightIcon } from "lucide-react";
import Link from "next/link";

export default function Major() {
  return (
    <section className="w-full flex flex-col gap-12 px-32 pt-16 bg-white">
      <div className="flex justify-between items-end">
        <h2 className="text-neutral-6 font-bold">
          Jelajahi berdasarkan <span className="text-blue">jurusan</span>
        </h2>
        <Link href="/jobs" className="flex gap-4 items-center justify-end">
          <p className="font-semibold text-base text-primary">
            Lihat semua pekerjaan
          </p>
          <ArrowRightIcon className="size-4 text-primary" />
        </Link>
      </div>
      <div className="w-full grid grid-cols-4 gap-8">
        <MajorCard majorId={1} />
        <MajorCard majorId={2} />
        <MajorCard majorId={3} />
        <MajorCard majorId={4} />
      </div>
    </section>
  );
}
