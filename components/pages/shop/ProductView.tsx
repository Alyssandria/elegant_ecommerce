"use client"

import { FilterIcon } from "@/components/icons/filter";
import { LayoutOptions } from "@/components/pages/shop/LayoutOptions";
import { Button } from "@/components/ui/button";
import { Drawer, DrawerClose, DrawerContent, DrawerDescription, DrawerFooter, DrawerHeader, DrawerTitle, DrawerTrigger } from "@/components/ui/drawer";
import { useProductQuery } from "@/lib/queries/useProductsQuery";
import { useState } from "react";
import { SortOptions } from "./SortOptions";
import { SORTOPTIONS } from "@/types/types";
import { useMediaQuery } from "@uidotdev/usehooks";

export const ProductView = () => {
  const [layout, setLayout] = useState<1 | 2 | 3>(1);
  const [sortOptions, setSortOptions] = useState<{
    sort: SORTOPTIONS,
    order: "asc" | "desc"
  }>({
    sort: SORTOPTIONS.TITLE,
    order: "asc"
  });

  const [category, setCategory] = useState();

  const isLargeDevice = useMediaQuery("(min-width : 64rem)");

  console.log(isLargeDevice)

  const products = useProductQuery();

  console.log(products.data);

  return (
    <div>
      <div className="grid grid-cols-2 lg:grid-cols-[265px_1fr_1fr_auto] lg:gap-6">
        <div className="flex gap-2 py-2 border-b border-t lg:border-none items-center">
          <FilterIcon />
          <span className="font-semibold">Filter</span>
        </div>

        <div className="flex justify-end py-2 border-t border-b lg:border-none lg:col-start-4">
          <LayoutOptions
            layout={layout}
            onChangeLayout={(layout) => {
              setLayout(layout);
            }} />
        </div>

        <div
          className="
            py-2 
            lg:col-start-2
            lg:row-start-1 
            lg:flex 
            lg:items-center
          "
        >
          {isLargeDevice ?
            <div>
              Testing
            </div>
            :
            <Drawer>
              <DrawerTrigger className="flex items-center cursor-pointer">
                <span className="font-semibold underline">Living Room</span>
              </DrawerTrigger>
              <DrawerContent>
                <DrawerHeader>
                  <DrawerTitle>Are you absolutely sure?</DrawerTitle>
                  <DrawerDescription>This action cannot be undone.</DrawerDescription>
                </DrawerHeader>
                <DrawerFooter>
                  <Button>Submit</Button>
                  <DrawerClose asChild>
                    <Button variant="outline">Cancel</Button>
                  </DrawerClose>
                </DrawerFooter>
              </DrawerContent>
            </Drawer>
          }
        </div>
        <div className="flex py-2 justify-end lg:col-start-3 lg:row-start-1">
          <SortOptions
            options={sortOptions}
            handleOrderChange={(val) => setSortOptions(prev => ({
              ...prev,
              order: val
            }))}
            handleSortByChange={(val) => setSortOptions(prev => ({
              ...prev,
              sort: val
            }))}
          />
        </div>
      </div>
    </div>
  )


}
