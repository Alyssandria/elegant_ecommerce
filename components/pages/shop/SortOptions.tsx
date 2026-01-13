import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { cn } from "@/lib/utils";
import { SORTOPTIONS } from "@/types/types";
import { ChevronDown } from "lucide-react";
import { ComponentPropsWithoutRef } from "react";

interface SortOptionsProps extends ComponentPropsWithoutRef<typeof DropdownMenu> {
  options?: {
    sort: SORTOPTIONS,
    order: "asc" | "desc"
  },
  handleSortByChange?: (value: SORTOPTIONS) => void
  handleOrderChange?: (value: "asc" | "desc") => void
}

export const SortOptions = ({
  options = {
    sort: SORTOPTIONS.TITLE,
    order: "asc"
  },
  handleOrderChange,
  handleSortByChange,
}: SortOptionsProps) => {
  const sortOptions = [
    {
      value: SORTOPTIONS.TITLE,
      label: "Title"
    },
    {
      value: SORTOPTIONS.PRICE,
      label: "Price",
    },
    {
      value: SORTOPTIONS.DISCOUNT_PERCENTAGE,
      label: "Discount %",
    },

    {
      value: SORTOPTIONS.RATING,
      label: "Rating",
    },
    {
      value: SORTOPTIONS.STOCK,
      label: "Stock",
    }
  ] satisfies {
    value: SORTOPTIONS
    label: string
  }[];

  const orderOptions = [
    {
      value: "asc",
      label: "Ascending"
    },
    {
      value: "desc",
      label: "Descending"
    }
  ];

  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="cursor-pointer flex gap-1 items-center">
        <span className="font-semibold">Sort By</span>
        <ChevronDown className="size-5" />
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuRadioGroup value={options.sort} onValueChange={(val) => handleSortByChange?.(val as SORTOPTIONS)}>
          {sortOptions.map(function(option) {
            return (
              <DropdownMenuRadioItem
                className={cn("cursor-pointer", option.value === options.sort ? "bg-neutral-02" : "")}
                key={option.value}
                value={option.value}
              >
                {option.label}
              </DropdownMenuRadioItem>
            )
          })}
        </DropdownMenuRadioGroup>
        <DropdownMenuSeparator />
        <DropdownMenuLabel>Order</DropdownMenuLabel>
        <DropdownMenuRadioGroup value={options.order} onValueChange={(val) => handleOrderChange?.(val as "asc" | "desc")}>
          {orderOptions.map(function(option) {
            return (
              <DropdownMenuRadioItem
                className={cn("cursor-pointer", option.value === options.order ? "bg-neutral-02" : "")}
                key={option.value}
                value={option.value}>
                {option.label}
              </DropdownMenuRadioItem>
            )
          })}
        </DropdownMenuRadioGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
