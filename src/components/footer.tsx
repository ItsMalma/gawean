import Button from "@/components/button";
import Input from "@/components/input";
import Logo from "@/components/logo";
import { IconName } from "@/utils/icon";
import { icons } from "lucide-react";
import Link from "next/link";

type SocialMedia = {
  name: string;
  href: string;
  icon: IconName;
};

const socialMedias: SocialMedia[] = [
  {
    name: "Instagram",
    href: "https://www.instagram.com/smkn4kotatangerang",
    icon: "Instagram",
  },
];

export default function Footer() {
  return (
    <footer className="w-full flex flex-col gap-16 px-32 pt-16 bg-neutral-7">
      <div className="w-full flex justify-between">
        <div className="w-96 flex flex-col gap-8">
          <div className="flex items-center gap-2">
            <Logo className="size-8" />
            <p className="font-red-hat-display font-bold text-2xl leading-6 -tracking-tighter text-white">
              Gawean
            </p>
          </div>
          <p className="text-xl text-neutral-2">
            Temukan pekerjaan impian di dunia startup dengan mudah untuk Anda
            yang bersemangat dan berbakat!
          </p>
        </div>
        <div className="w-96 flex flex-col gap-10">
          <div className="flex flex-col gap-4">
            <p className="text-lg font-semibold text-white">
              Dapatkan notifikasi loker
            </p>
            <p className="text-neutral-2">
              Langganan untuk mendapatkan update mingguan loker terbaru.
            </p>
          </div>
          <div className="flex gap-2">
            <Input placeholder="Alamat Email" />
            <Button text="Subscribe" />
          </div>
        </div>
      </div>
      <div className="w-full flex justify-between items-center py-10 border-t-2 border-white/10">
        <p className="font-medium text-white/50">
          2024 @ Gawean. All rights reserved.
        </p>
        <div className="flex items-center gap-6">
          {socialMedias.map((socialMedia) => {
            const Icon = icons[socialMedia.icon];

            return (
              <Link
                key={socialMedia.name}
                href={socialMedia.href}
                className="size-8 flex justify-center items-center rounded-full bg-white/10"
              >
                <Icon className="size-4 text-white" />
              </Link>
            );
          })}
        </div>
      </div>
    </footer>
  );
}
