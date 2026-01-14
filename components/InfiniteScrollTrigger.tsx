"use client"
import { useEffect, useRef } from "react"

interface InfiniteScrollTriggerProps {
  enabled: boolean,
  onVisible: () => void
}

export const InfiniteScrollTrigger = ({ enabled, onVisible }: InfiniteScrollTriggerProps) => {

  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!enabled) return;

    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        onVisible();
      }
    }, { threshold: 1 });

    const el = ref.current

    if (el) observer.observe(el);

    return () => {
      if (el) observer.unobserve(el);
      observer.disconnect();
    }
  });

  return (
    <div ref={ref} className="h-1" />
  )

}
