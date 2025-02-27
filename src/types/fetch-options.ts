export type IFetchOptions = {
  method?: "GET" | "POST" | "PUT" | "DELETE";
  headers?: Record<string, string>;
  body?: string;
  timeout?: number;
  cache?: RequestCache;
  next?: NextFetchRequestConfig;
};
