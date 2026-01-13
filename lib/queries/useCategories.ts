"use client";
import { CATEGORY_LIST } from "@/types/types";
import { useQuery } from "@tanstack/react-query"
import axios from "axios";

export const useCategories = () => {
  return useQuery({
    'queryKey': ['categories'],
    'queryFn': async () => {
      const response = await axios.get(`${process.env.NEXT_PUBLIC_API_BASE}/products/category-list`);

      return response.data.data as CATEGORY_LIST[];
    }
  });
}
