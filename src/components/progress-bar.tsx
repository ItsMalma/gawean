import clsx from "clsx";
import React from "react";

export type ProgressBarProps = React.HTMLAttributes<HTMLDivElement> & {
  value: number;
};

export default function ProgressBar({
  value,
  className,
  ...props
}: ProgressBarProps) {
  return (
    <div className={clsx("h-1.5 flex bg-neutral-2", className)} {...props}>
      <span style={{ width: `${value}%` }} className="bg-green" />
    </div>
  );
}
