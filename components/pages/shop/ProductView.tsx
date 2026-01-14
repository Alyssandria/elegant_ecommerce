"use client";
import { FilterIcon } from "@/components/icons/filter";
import { useMediaQuery } from 'usehooks-ts'
import { LayoutOptions } from "@/components/pages/shop/LayoutOptions";
import { Button } from "@/components/ui/button";
import { Drawer, DrawerClose, DrawerContent, DrawerFooter, DrawerHeader, DrawerTitle, DrawerTrigger } from "@/components/ui/drawer";
import { useProductQuery } from "@/lib/queries/useProductsQuery";
import { useState } from "react";
import { SortOptions } from "./SortOptions";
import { CATEGORY_LIST, SORTOPTIONS } from "@/types/types";
import { useCategories } from "@/lib/queries/useCategories";
import { ScrollArea } from "@/components/ui/scroll-area";
import { cn } from "@/lib/utils";
import { InfiniteScrollTrigger } from "@/components/InfiniteScrollTrigger";
import { Loader } from "@/components/Loader";

const LAYOUT_STYLES = {
  1: {
    className: "grid-cols-1"
  },

  2: {
    className: "grid-cols-2"
  },

  3: {
    className: "grid-cols-3"
  }
}

export const ProductView = () => {
  const [layout, setLayout] = useState<keyof typeof LAYOUT_STYLES>(1);
  const [sortOptions, setSortOptions] = useState<{
    sort: SORTOPTIONS,
    order: "asc" | "desc"
  }>({
    sort: SORTOPTIONS.TITLE,
    order: "asc"
  });


  const categories = useCategories();

  const [category, setCategory] = useState<{
    name: "All Products",
    slug: "all"
  } | CATEGORY_LIST>({
    name: "All Products",
    slug: "all"
  });

  const isLargeDevice = useMediaQuery("(min-width : 64rem)", {
    initializeWithValue: false
  });
  const products = useProductQuery();

  const items = products.data?.pages.flatMap((p) => p.data.products) ?? [];
  console.log(categories.data);
  return (
    <div>
      <div className="grid p-6 grid-cols-2 gap-y-4 lg:grid-cols-[265px_1fr_1fr_auto] lg:gap-6">
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
            <div>{category.name}</div>
            :
            <Drawer>
              <DrawerTrigger className="flex items-center cursor-pointer">
                <span className="font-semibold underline">{category.name}</span>
              </DrawerTrigger>
              <DrawerContent>
                <DrawerHeader>
                  <DrawerTitle>Product Categories</DrawerTitle>
                </DrawerHeader>
                <ScrollArea className="h-48">
                  <div className="flex flex-col gap-4 px-8">
                    <DrawerClose
                      asChild
                    >
                      <Button
                        variant={"ghost"}
                        className={cn(
                          "flex items-center justify-center",
                          "all" === category.slug && "bg-neutral-02 font-bold"
                        )}
                        onClick={() => {
                          setCategory({
                            name: "All Products",
                            slug: "all"
                          });
                        }}
                      >
                        {"All Products"}
                      </Button>
                    </DrawerClose>
                    {categories.data?.map(function(item) {
                      return (
                        <DrawerClose
                          key={item.slug}
                          asChild
                        >
                          <Button
                            variant={"ghost"}
                            className={cn(
                              "flex items-center justify-center",
                              item.slug === category.slug && "bg-neutral-02 font-bold"
                            )}
                            onClick={() => {
                              setCategory(item);
                            }}
                          >
                            {item.name}
                          </Button>
                        </DrawerClose>
                      )
                    })}
                  </div>
                </ScrollArea>
                <DrawerFooter>
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


      <div className="lg:grid lg:grid-cols-[256px_1fr] lg:gap-6 w-full">

        {/* CATEGORIES  */}
        <div className="max-lg:hidden w-full flex flex-col gap-2">
          <span className="font-semibold">CATEGORIES</span>

          <ScrollArea className="h-72 w-full">
            <Loader isLoading={categories.isLoading} className="min-h-72">
              <div className="flex flex-col gap-1">
                <Button
                  variant={"ghost"}
                  className={cn(
                    "p-0 flex justify-start text-xs font-semibold text-primary/50",
                    "all" === category.slug && "underline text-primary"
                  )}
                  onClick={() => {
                    setCategory({
                      name: "All Products",
                      slug: "all"
                    });
                  }}
                >
                  <span>{"All Products"}</span>
                </Button>
                {categories.data?.map((item) => {
                  return (
                    <Button
                      key={item.slug}
                      variant={"ghost"}
                      className={cn(
                        "text-left justify-start p-0 text-xs font-semibold text-primary/50",
                        item === category && "underline text-primary"
                      )}
                      onClick={() => setCategory(item)}
                    >
                      <span>{item.name}</span>
                    </Button>
                  )
                })}
              </div>
            </Loader>
          </ScrollArea>
        </div>

        <ScrollArea className="h-72 w-full lg:py-6">
          <Loader isLoading={products.isLoading} className="min-h-72">
            <div className={cn(
              "grid gap-4",
              LAYOUT_STYLES[layout].className
            )}>
              {items.map(val => {
                return (
                  <div
                    key={val.id}
                    className={cn(
                      "flex w-full bg-amber-400",
                      layout !== 1 && "max-w-[256px]"
                    )}
                  >
                    {val.title}
                  </div>
                )
              })}

              <InfiniteScrollTrigger
                onVisible={() => products.fetchNextPage()}
                enabled={!!products.hasNextPage && !products.isFetchingNextPage}
              />
            </div>
            {products.isFetchingNextPage && (
              <div>
                Loading....
              </div>
            )}
            {!products.hasNextPage && !products.isFetching && (
              <div className="text-center py-4 font-medium">
                You've reached the end
              </div>
            )}
          </Loader>
        </ScrollArea>
      </div>
      {/* PRODUCTS VIEW */}
    </div>
  )


}
