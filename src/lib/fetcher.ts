import { IAPIResponse } from "@/models/api";
import { IFetchOptions } from "@/types/fetch-options";

export async function fetcher<T>(
  url: string,
  options: IFetchOptions
): Promise<IAPIResponse<T>> {
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}${url}`, {
      method: options.method || "GET",
      headers: {
        "Content-Type": "application/json",
        ...options.headers,
      },
      body: options.body ? JSON.stringify(options.body) : null,
      cache: options.cache || "no-cache",
      next: options.next,
    });

    if (!response.ok) {
      throw new Error(`Error ${response.status}: ${response.statusText}`);
    }

    return response.json() as Promise<IAPIResponse<T>>;
  } catch (error) {
    console.error(error);
    throw error;
  }
}
