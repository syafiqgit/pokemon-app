import { Skeleton } from "./ui/skeleton";

export default function SkeletonCard() {
  return (
    <>
      {"12345678910111213141516171819".split("").map((i) => (
        <div
          key={i}
          className="bg-color-accent rounded-md flex flex-col justify-center items-center gap-1"
        >
          <div className="">
            <Skeleton className="md:w-40 w-32 h-28 md:h-40 mt-4" />
          </div>
          <div>
            <Skeleton className="md:w-56 w-40 md:h-12 h-10"/>
          </div>
        </div>
      ))}
    </>
  );
}
