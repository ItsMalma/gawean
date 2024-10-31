import clsx from "clsx";
import { CheckIcon } from "lucide-react";
import React from "react";

export type CheckboxProps = React.InputHTMLAttributes<HTMLInputElement> & {
  label: string;
};

export default function Checkbox({
  label,
  className,
  onChange,
  ...props
}: CheckboxProps) {
  const [isChecked, setIsChecked] = React.useState(false);
  const ref = React.useRef<HTMLInputElement | null>(null);

  return (
    <div className={clsx("relative flex gap-4 items-center", className)}>
      <input
        ref={ref}
        type="checkbox"
        className="appearance-none absolute"
        onChange={(e) => {
          setIsChecked(e.target.checked);
          if (onChange) onChange(e);
        }}
        {...props}
      />
      <div
        className={clsx(
          "group flex justify-center items-center border-2 rounded-[4px] transition-colors duration-100",
          isChecked
            ? "bg-primary border-primary"
            : "bg-transparent border-neutral-2",
        )}
        onClick={() => ref.current?.click()}
      >
        <CheckIcon
          className={clsx(
            "size-4 text-white transition-opacity duration-100",
            isChecked ? "opacity-100" : "opacity-0",
          )}
        />
      </div>
      <label className="text-neutral-5" htmlFor={props.id}>
        {label}
      </label>
    </div>
  );
}
