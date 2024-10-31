import Button from "@/components/button";
import Image from "next/image";

export default function CTA() {
  return (
    <section className="w-full flex flex-col gap-12 px-32 py-16 bg-white">
      <div
        className="w-full flex justify-between items-start px-16 pt-24 bg-primary"
        style={{
          clipPath:
            "polygon(180px 0, 100% 0, 100% 318px, 1000px 100%, 0 100%, 0 64px)",
        }}
      >
        <div className="w-96 flex flex-col gap-6 text-white">
          <h2>Posting loker di sini</h2>
          <p className="font-medium">
            Temukan kandidat unggulan untuk perusahaan Anda tanpa biaya!
          </p>
          <Button
            text="Daftar Sekarang, Gratis!"
            className="bg-white !text-primary"
          />
        </div>
        <Image
          src="https://placehold.co/564x344"
          alt="Tampilan Dashboard"
          width={564}
          height={344}
        />
      </div>
    </section>
  );
}
