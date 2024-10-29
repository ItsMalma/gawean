"use client";

import LandingPageCategory from "@/sections/landing-page-category";
import LandingPageCompany from "@/sections/landing-page-company";
import LandingPageCTA from "@/sections/landing-page-cta";
import LandingPageFeaturedJobs from "@/sections/landing-page-featured-jobs";
import LandingPageHero from "@/sections/landing-page-hero";
import LandingPageLatestJobs from "@/sections/landing-page-latest-jobs";

export default function LandingPage() {
  return (
    <div className="flex flex-col">
      <LandingPageHero />
      <LandingPageCompany />
      <LandingPageCategory />
      <LandingPageCTA />
      <LandingPageFeaturedJobs />
      <LandingPageLatestJobs />
    </div>
  );
}
