export type Response<T> = {
  statusCode: string;
  data: T;
  count: number;
  currentPage: number;
  nextPage: number | null;
  prevPage: number | null;
  lastPage: number;
};
