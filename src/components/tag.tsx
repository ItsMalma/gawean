import clsx from "clsx";
import React from "react";

export type TagProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  text: string;
  filled?: boolean;
};

export default function Tag({
  text,
  filled = false,
  className,
  ...props
}: TagProps) {
  return (
    <button
      className={clsx(
        "w-fit flex gap-2 justify-center items-center px-3 py-1 text-primary",
        filled
          ? "bg-neutral-1 border-none"
          : "bg-transparent border border-primary",
        className,
      )}
      {...props}
    >
      {text}
    </button>
  );
}
