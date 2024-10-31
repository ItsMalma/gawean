"use client";

import Footer from "@/components/footer";
import Hero from "./hero";
import JobList from "./job-list";

export default function JobsPage() {
  return (
    <div className="flex flex-col">
      <Hero />
      <JobList />
      <Footer />
    </div>
  );
}
