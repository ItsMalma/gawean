"use client";

import Footer from "@/components/footer";
import Category from "@/app/(landing-page)/category";
import Company from "@/app/(landing-page)/company";
import CTA from "@/app/(landing-page)/cta";
import FeaturedJobs from "@/app/(landing-page)/featured-jobs";
import Hero from "@/app/(landing-page)/hero";
import LatestJobs from "@/app/(landing-page)/latest-jobs";

export default function LandingPage() {
  return (
    <div className="flex flex-col">
      <Hero />
      <Company />
      <Category />
      <CTA />
      <FeaturedJobs />
      <LatestJobs />
      <Footer />
    </div>
  );
}
