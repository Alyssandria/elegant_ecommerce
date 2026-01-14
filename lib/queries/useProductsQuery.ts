"use client";
import { API_SUCCESS, PAGINATED_QUERY, PRODUCTS } from "@/types/types";
import { useInfiniteQuery } from "@tanstack/react-query"
import axios from "axios";

const LIMIT = 15;

export const useProductQuery = (search?: string) => {
  return useInfiniteQuery({
    'queryKey': ['products'],
    'queryFn': async ({ pageParam }) => {
      const res = await axios.get(`${process.env.NEXT_PUBLIC_API_BASE!}/products`, {
        params: {
          search,
          skip: pageParam,
          limit: LIMIT
        }
      });

      return res.data as API_SUCCESS<PAGINATED_QUERY & { products: PRODUCTS[] }>;
    },
    initialPageParam: 0,
    getNextPageParam: (lastPage) => {
      const nextSkip = lastPage.data.skip + lastPage.data.limit;

      if (nextSkip >= lastPage.data.total) return undefined;

      return nextSkip;
    }
  });
}
