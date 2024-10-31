import React from "react";

export type UsePaginationReturn<T> = {
  data: T[];
  page: number;
  maxPage: number;

  next: () => void;
  back: () => void;
  set: (page: number) => void;
};

export default function usePagination<T>(
  data: T[],
  perPage: number = 10,
): UsePaginationReturn<T> {
  const [page, setPage] = React.useState(1);

  const dataReturned = React.useMemo(() => {
    const start = (page - 1) * perPage;
    return data.slice(start, start + perPage);
  }, [data, page, perPage]);

  const maxPage = React.useMemo(() => {
    return Math.ceil(data.length / perPage);
  }, [data.length, perPage]);

  const next = React.useCallback(() => {
    setPage((prev) => (prev + 1 <= maxPage ? prev + 1 : prev));
  }, [maxPage]);

  const back = React.useCallback(() => {
    setPage((prev) => (prev - 1 >= 1 ? prev - 1 : prev));
  }, []);

  const set = React.useCallback(
    (newPage: number) => {
      if (newPage - 1 < 1 || newPage + 1 > maxPage) return;
      setPage(newPage);
    },
    [maxPage],
  );

  return {
    data: dataReturned,
    page,
    maxPage,
    next,
    back,
    set,
  };
}
