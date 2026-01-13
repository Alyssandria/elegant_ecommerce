import { cn } from "@/lib/utils"
import { SVGProps } from "react"
export const FilterIcon = ({ className, ...props }: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    className={cn("size-6", className)}
    fill="none"
    {...props}
  >
    <path
      stroke="#141718"
      strokeLinecap="round"
      strokeWidth={1.5}
      d="M3 7h3m0 0a3 3 0 1 0 6 0 3 3 0 0 0-6 0ZM3 17h6m9 0h3m-3 0a3 3 0 1 1-6 0 3 3 0 0 1 6 0ZM15 7h6"
    />
  </svg>
)
