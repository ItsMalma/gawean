import clsx from "clsx";
import React from "react";

export type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "filled" | "outline";
  size?: "sm" | "md" | "lg";
  text: string;
};

export default function Button({
  variant = "filled",
  size = "md",
  text,
  className,
  ...props
}: ButtonProps) {
  return (
    <button
      className={clsx(
        "w-fit flex gap-2.5 justify-center items-center font-bold",
        variant === "filled" && "bg-primary text-white",
        variant === "outline" &&
          "bg-transparent text-primary border border-primary",
        size === "sm" && "px-5 py-2.5 text-sm",
        size === "md" && "px-6 py-3 text-base",
        size === "lg" && "px-7 py-3.5 text-lg",
        className,
      )}
      {...props}
    >
      {text}
    </button>
  );
}
