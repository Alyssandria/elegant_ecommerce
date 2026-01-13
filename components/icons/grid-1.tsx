import { cn } from "@/lib/utils"
import { SVGProps } from "react"
export const Grid1x1 = ({ className, fill, ...props }: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    className={cn("size-6", className)}
    fill="none"
    {...props}
  >
    <path
      fill={fill ? fill : "#6C7275"}
      d="M13 15.25A2.25 2.25 0 0 1 15.25 13h3.5A2.25 2.25 0 0 1 21 15.25v3.5A2.25 2.25 0 0 1 18.75 21h-3.5A2.25 2.25 0 0 1 13 18.75v-3.5Zm0-10A2.25 2.25 0 0 1 15.25 3h3.5A2.25 2.25 0 0 1 21 5.25v3.5A2.25 2.25 0 0 1 18.75 11h-3.5A2.25 2.25 0 0 1 13 8.75v-3.5Zm-10 10A2.25 2.25 0 0 1 5.25 13h3.5A2.25 2.25 0 0 1 11 15.25v3.5A2.25 2.25 0 0 1 8.75 21h-3.5A2.25 2.25 0 0 1 3 18.75v-3.5Zm0-10A2.25 2.25 0 0 1 5.25 3h3.5A2.25 2.25 0 0 1 11 5.25v3.5A2.25 2.25 0 0 1 8.75 11h-3.5A2.25 2.25 0 0 1 3 8.75v-3.5Z"
    />
    <path fill={fill ? fill : "#6C7275"} d="M6 21v-7.998h12V21H6ZM6 10.998V3h12v7.998H6Z" />
  </svg>
)
