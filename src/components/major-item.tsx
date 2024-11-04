import { useMajor } from "@/api/major";
import clsx from "clsx";
import { icons } from "lucide-react";
import React from "react";

export type MajorItemProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  majorId: number;
  active?: boolean;
};

export default function MajorItem({
  majorId,
  active = false,
  className,
  ...props
}: MajorItemProps) {
  const { data: major } = useMajor(majorId);

  const Icon = icons[major?.icon ?? "ImageOff"];

  return (
    <button
      data-active={active}
      className={clsx(
        "group flex flex-col gap-8 p-8 bg-white border border-neutral-2 transition-colors duration-300 data-[active=true]:bg-primary",
        className,
      )}
      {...props}
    >
      <Icon className="size-12 text-primary group-data-[active=true]:text-white transition-colors duration-300" />
      <h4 className="text-neutral-6 group-data-[active=true]:text-white transition-colors duration-300">
        {major?.name ?? "Not Found"}
      </h4>
    </button>
  );
}
