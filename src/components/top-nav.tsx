"use client";

import { usePathname } from "next/navigation";
import Logo from "./logo";
import React from "react";
import clsx from "clsx";
import Link from "next/link";
import Button from "./button";

export type TopNavItem = {
  text: string;
  href: string;
};

export type TopNavProps = React.HTMLAttributes<HTMLElement> & {
  items: TopNavItem[];
};

export default function TopNav({ items, className, ...props }: TopNavProps) {
  const pathname = usePathname();

  return (
    <nav
      className={clsx(
        "w-full h-20 flex justify-between items-center px-32",
        className,
      )}
      {...props}
    >
      <div className="h-full flex gap-12 justify-center items-center">
        <div className="flex gap-2 justify-center items-center">
          <Logo height={32} />
          <p className="font-red-hat-display font-bold text-2xl leading-6 -tracking-tighter text-neutral-6">
            Gawean
          </p>
        </div>
        <div className="h-full flex gap-4 justify-center items-end">
          {items.map((item) => (
            <Link
              key={item.text + ":" + item.href}
              href={item.href}
              className={clsx(
                "h-14 font-medium",
                item.href === pathname
                  ? "text-primary border-b-4 border-primary"
                  : "text-neutral-5 ",
              )}
            >
              {item.text}
            </Link>
          ))}
        </div>
      </div>
      <div className="flex gap-4 justify-center items-center">
        <Button variant="outline" size="sm" text="Sign In" />
        <span className="w-[1px] self-stretch bg-neutral-2" />
        <Button variant="filled" size="sm" text="Sign Up" />
      </div>
    </nav>
  );
}
