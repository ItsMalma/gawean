import clsx from "clsx";
import React from "react";

export type TagProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  text: string;
};

export default function Tag({ text, className, ...props }: TagProps) {
  return (
    <button
      className={clsx(
        "w-fit flex gap-2 justify-center items-center px-3 py-1 bg-transparent border border-primary text-primary",
        className,
      )}
      {...props}
    >
      {text}
    </button>
  );
}
