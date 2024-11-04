"use client";

import Footer from "@/components/footer";
import Hero from "./hero";
import CompanyList from "../companies/company-list";

export default function JobsPage() {
  return (
    <div className="flex flex-col">
      <Hero />
      <CompanyList />
      <Footer />
    </div>
  );
}
