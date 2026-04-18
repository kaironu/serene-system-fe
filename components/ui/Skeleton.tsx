'use client';

export function Skeleton({
  className = 'w-full h-4 bg-gray-200 rounded',
}: {
  className?: string;
}) {
  return <div className={`${className} animate-pulse`} />;
}

export function ProductCardSkeleton() {
  return (
    <div className="space-y-4">
      <Skeleton className="w-full aspect-square rounded-lg" />
      <Skeleton className="w-3/4 h-4" />
      <Skeleton className="w-1/2 h-4" />
    </div>
  );
}
