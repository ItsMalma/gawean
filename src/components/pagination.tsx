import { UsePaginationReturn } from "@/hooks/use-pagination";
import clsx from "clsx";
import { ChevronLeftIcon, ChevronRightIcon } from "lucide-react";
import React from "react";

export type PaginationProps<T> = React.HTMLAttributes<HTMLDivElement> & {
  pagination: UsePaginationReturn<T>;
};

function PaginationItem<T>(props: {
  pagination: UsePaginationReturn<T>;
  value?: number;
}) {
  return (
    <div
      onClick={() => {
        if (typeof props.value == "number") {
          props.pagination.set(props.value);
        }
      }}
      className={clsx(
        "size-12 flex gap-2 justify-center items-center px-3 py-2.5 rounded-lg font-semibold",
        props.value === props.pagination.page
          ? "bg-primary text-white"
          : "bg-transparent text-neutral-5",
      )}
    >
      {props.value ?? "..."}
    </div>
  );
}

export default function Pagination<T>({
  pagination,
  className,
  ...props
}: PaginationProps<T>) {
  const showFirst = React.useMemo(() => {
    return pagination.page > 4;
  }, [pagination.page]);

  const showLast = React.useMemo(() => {
    return pagination.page < pagination.maxPage - 2;
  }, [pagination.maxPage, pagination.page]);

  const items = React.useMemo<number[]>(() => {
    const result = [];

    const start = showFirst ? pagination.page - 1 : 1;
    const end = showLast
      ? pagination.page + 1
      : Math.min(pagination.maxPage, 5);

    for (let i = start; i <= end; i++) {
      result.push(i);
    }

    return result;
  }, [pagination.maxPage, pagination.page, showFirst, showLast]);

  return (
    <div className={clsx("flex gap-2 items-center", className)} {...props}>
      <ChevronLeftIcon
        className="size-6 text-neutral-6 cursor-pointer"
        onClick={pagination.back}
      />
      <div className="grow flex items-center">
        {showFirst && (
          <>
            <PaginationItem pagination={pagination} value={1} />
            <PaginationItem pagination={pagination} />
          </>
        )}
        {items.map((item) => (
          <PaginationItem key={item} pagination={pagination} value={item} />
        ))}
        {showLast && (
          <>
            <PaginationItem
              pagination={pagination}
              value={pagination.maxPage}
            />
            <PaginationItem pagination={pagination} />
          </>
        )}
      </div>
      <ChevronRightIcon
        className="size-6 text-neutral-6 cursor-pointer"
        onClick={pagination.next}
      />
    </div>
  );
}
