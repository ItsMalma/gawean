import Image from "next/image";

export default function LandingPageCompany() {
  return (
    <section className="w-full flex flex-col gap-8 px-32 py-12 bg-white">
      <p className="text-lg text-neutral-7">
        Beberapa perusahaan yang telah terbantu dengan platform ini
      </p>
      <div className="w-full flex justify-between items-center">
        <Image src="/lenovo.svg" alt="lenovo" width={152} height={32} />
        <Image src="/asus.svg" alt="asus" width={152} height={32} />
        <Image src="/acer.svg" alt="acer" width={152} height={32} />
        <Image src="/dell.svg" alt="dell" width={152} height={32} />
        <Image src="/samsung.svg" alt="hp" width={152} height={32} />
      </div>
    </section>
  );
}
