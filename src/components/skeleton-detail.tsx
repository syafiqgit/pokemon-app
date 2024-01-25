import { Skeleton } from "./ui/skeleton";

export default function SkeletonDetail() {
  return (
    <div className="flex flex-col gap-5">
      <Skeleton className="h-40 rounded-full" />
      <div className="flex justify-center items-center gap-16">
        <Skeleton className="w-40 h-10" />
        <Skeleton className="w-40 h-10" />
      </div>
      <div className="flex justify-center items-center gap-16">
        <Skeleton className="w-32 h-10" />
        <Skeleton className="w-32 h-10" />
      </div>
      <div className="flex flex-col gap-4">
        <Skeleton className="w-full h-10" />
        <Skeleton className="w-full h-10" />
        <Skeleton className="w-full h-10" />
        <Skeleton className="w-full h-10" />
        <Skeleton className="w-full h-10" />
        <Skeleton className="w-full h-10" />
        <Skeleton className="w-full h-10" />
      </div>
    </div>
  );
}
