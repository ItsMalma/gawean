export type FetchHookReturn<T> = {
  data: T;
  isLoading: boolean;
  isError: boolean;
};
