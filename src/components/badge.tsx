import { Color } from "@/utils/color";
import clsx from "clsx";
import React from "react";

export type BadgeProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  color: Color;
  text: string;
};

export default function Badge({
  color,
  text,
  className,
  ...props
}: BadgeProps) {
  return (
    <button
      className={clsx(
        "w-fit flex gap-2 justify-center items-center px-4 py-1 rounded-full font-semibold text-sm",
        color == "blue" && "bg-blue/10 text-blue",
        color == "yellow" && "bg-yellow/10 text-yellow",
        color == "green" && "bg-green/10 text-green",
        color == "purple" && "bg-purple/10 text-purple",
        color == "red" && "bg-red/10 text-red",
        className,
      )}
      {...props}
    >
      {text}
    </button>
  );
}
