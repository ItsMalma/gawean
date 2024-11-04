"use client";

import Footer from "@/components/footer";
import Hero from "./hero";
import Recommended from "./recommended";
import CTA from "./cta";
import CompaniesByMajor from "./companies-by-major";
import { useSearchParams } from "next/navigation";
import React from "react";
import CompanyList from "./company-list";

export default function CompaniesPage() {
  const searchParams = useSearchParams();

  const [search, location] = React.useMemo(() => {
    return [searchParams.get("search"), searchParams.get("location")];
  }, [searchParams]);

  return (
    <div className="flex flex-col">
      <Hero />
      {!!search && !!location ? (
        <CompanyList />
      ) : (
        <>
          <Recommended />
          <CTA />
          <CompaniesByMajor />
        </>
      )}
      <Footer />
    </div>
  );
}
