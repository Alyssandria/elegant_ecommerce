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

      return res.data;
    },
    initialPageParam: 0,
    getNextPageParam: (lastPage) => {
      const nextSkip = lastPage.skip + lastPage.limit;

      // Stop if we've loaded everything
      if (nextSkip >= lastPage.total) return undefined;

      return nextSkip;
    }
  });
}
