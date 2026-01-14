import { cn } from "@/lib/utils"
import { Loader2Icon } from "lucide-react"
import { ComponentPropsWithoutRef, ReactNode } from "react"

interface LoaderProps extends ComponentPropsWithoutRef<"div"> {
  isLoading: boolean
  customLoader?: ReactNode
}

export const Loader = ({
  isLoading,
  customLoader,
  className,
  children,
  ...props
}:
  LoaderProps
) => {
  return (
    <div
      className={cn(
        "size-full",
        isLoading && "flex items-center justify-center",
        className
      )}
      {...props}
    >
      {isLoading ?
        customLoader || <Loader2Icon className="animate-spin" />
        : children
      }
    </div>
  )
}
