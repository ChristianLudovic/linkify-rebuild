import { Skeleton } from "@/components/ui/skeleton"
 
export function SkeletonCard() {
  return (
    <>
      <Skeleton className="h-[200px] w-full rounded-xl" style={{ backgroundColor : "#242424"}} />
    </>
  )
}