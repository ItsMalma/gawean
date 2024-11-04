"use client";

import Footer from "@/components/footer";
import Hero from "./hero";
import Recommended from "./recommended";
import CTA from "./cta";
import CompaniesByMajor from "./companies-by-major";

export default function CompaniesPage() {
  return (
    <div className="flex flex-col">
      <Hero />
      <Recommended />
      <CTA />
      <CompaniesByMajor />
      <Footer />
    </div>
  );
}
