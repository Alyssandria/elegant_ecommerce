import { Grid1x1 } from "@/components/icons/grid-1"
import { Grid2x2 } from "@/components/icons/grid-2"
import { Grid3x3 } from "@/components/icons/grid-3"
import { Button } from "@/components/ui/button"
import { ButtonGroup } from "@/components/ui/button-group"
import { cn } from "@/lib/utils"
import { ComponentPropsWithoutRef } from "react"

interface LayoutOptionsType extends ComponentPropsWithoutRef<typeof ButtonGroup> {
  layout?: number,
  onChangeLayout?: (layoutNumber: 1 | 2 | 3) => void;
};
export const LayoutOptions = ({ onChangeLayout: onChangelayout, layout = 1, className }: LayoutOptionsType) => {
  const buttons = [
    {
      icon: <Grid3x3 />,
      id: 3,
      className: "max-lg:hidden rounded-l-none"
    },
    {
      icon: <Grid2x2 />,
      id: 2,
      className: ""
    },
    {
      icon: <Grid1x1 />,
      id: 1,
      className: "rounded-r-none"
    },
  ]
  return (
    <ButtonGroup className={cn("border-none shadow-none", className)}>
      {buttons.map(function(button) {
        return (
          <Button
            onClick={() => {
              onChangelayout?.(button.id)
            }}
            key={button.id}
            variant={"outline"}
            size={"icon-lg"}
            className={
              cn("cursor-pointer",
                layout === button.id ? "bg-neutral-02" : "bg-white",
                button.className
              )}
          >
            {button.icon}
          </Button>
        )
      })}
    </ButtonGroup>

  )

}
