import { cn } from "../../utils/cn";

interface SkeletonProps {
  className?: string;
  variant?: "text" | "circular" | "rectangular";
  width?: string;
  height?: string;
}

export default function Skeleton({ 
  className, 
  variant = "rectangular", 
  width, 
  height 
}: SkeletonProps) {
  const baseClasses = "animate-pulse bg-gray-200 rounded";
  
  const variantClasses = {
    text: "h-4 w-full",
    circular: "rounded-full",
    rectangular: "rounded-md"
  };

  return (
    <div
      className={cn(
        baseClasses,
        variantClasses[variant],
        className
      )}
      style={{
        width: width,
        height: height
      }}
    />
  );
}

// Predefined skeleton components
export const ProductCardSkeleton = () => (
  <div className="flex flex-col gap-4 rounded-lg shadow-md p-4 bg-white">
    <Skeleton className="w-full h-48 rounded-t-lg" />
    <div className="space-y-2">
      <Skeleton className="h-6 w-3/4" />
      <Skeleton className="h-4 w-full" />
      <Skeleton className="h-5 w-1/3" />
    </div>
  </div>
);

export const ProductDetailSkeleton = () => (
  <div className="flex flex-col lg:flex-row gap-8 p-6">
    <Skeleton className="w-full lg:w-1/2 h-96 rounded-2xl" />
    <div className="flex flex-col gap-6 w-full lg:w-1/2">
      <Skeleton className="h-12 w-3/4" />
      <Skeleton className="h-6 w-1/2" />
      <Skeleton className="h-8 w-1/3" />
      <div className="space-y-4">
        <Skeleton className="h-6 w-1/4" />
        <div className="flex gap-2">
          {[...Array(4)].map((_, i) => (
            <Skeleton key={i} className="w-16 h-16 rounded-lg" />
          ))}
        </div>
      </div>
      <div className="space-y-4">
        <Skeleton className="h-6 w-1/4" />
        <div className="flex gap-2">
          {[...Array(3)].map((_, i) => (
            <Skeleton key={i} className="w-20 h-12 rounded-lg" />
          ))}
        </div>
      </div>
      <div className="space-y-3">
        <Skeleton className="h-12 w-full rounded-full" />
        <Skeleton className="h-12 w-full rounded-full" />
      </div>
      <Skeleton className="h-20 w-full" />
    </div>
  </div>
);

export const ReviewCardSkeleton = () => (
  <div className="flex flex-col gap-4 p-6 shadow-md rounded-md bg-white">
    <div className="flex gap-4">
      <Skeleton className="w-12 h-12 rounded-full" />
      <div className="space-y-2 flex-1">
        <Skeleton className="h-5 w-1/3" />
        <Skeleton className="h-4 w-1/2" />
      </div>
    </div>
    <div className="flex gap-2 items-center">
      <Skeleton className="w-6 h-6" />
      <Skeleton className="h-6 w-16" />
    </div>
    <div className="space-y-2">
      <Skeleton className="h-6 w-2/3" />
      <Skeleton className="h-4 w-full" />
    </div>
  </div>
); 