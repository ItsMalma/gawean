import CompanyCard from "@/components/company-card";

export default function Recommended() {
  return (
    <section className="w-full flex flex-col gap-8 px-32 py-16">
      <div className="w-full flex flex-col gap-2">
        <h3 className="font-bold text-neutral-6">
          Perusahaan Yang Direkomendasikan
        </h3>
        <p className="text-neutral-4">
          Rekomendasi berdasarkan profil, preferensi perusahaan, dan aktivitas
          terbaru anda
        </p>
      </div>
      <div className="grid grid-cols-3 auto-rows-fr gap-8 items-stretch">
        <CompanyCard companyId={1} />
        <CompanyCard companyId={2} />
        <CompanyCard companyId={3} />
        <CompanyCard companyId={4} />
        <CompanyCard companyId={5} />
        <CompanyCard companyId={6} />
      </div>
    </section>
  );
}
