import clsx from "clsx";
import React from "react";

export type InputProps = React.InputHTMLAttributes<HTMLInputElement> & {};

export default function Input({ className, ...props }: InputProps) {
  return (
    <input
      className={clsx(
        "w-56 px-4 py-3 bg-white border border-neutral-2 text-neutral-5 placeholder:text-neutral-3",
        className,
      )}
      {...props}
    />
  );
}
