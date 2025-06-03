interface UserCardSkeletonProps {
  className?: string;
}

export const UserCardSkeleton = ({ className }: UserCardSkeletonProps) => {
  return (
    <div className={`rounded-lg border border-gray-200 bg-white p-6 shadow-sm ${className}`}>
      <div className="flex items-center gap-4">
        <div className="h-16 w-16 animate-pulse rounded-full bg-gray-200" />
        <div className="flex-1 space-y-2">
          <div className="h-5 w-32 animate-pulse rounded bg-gray-200" />
          <div className="h-4 w-24 animate-pulse rounded bg-gray-200" />
        </div>
      </div>

      <div className="mt-4 space-y-2">
        <div className="h-4 w-full animate-pulse rounded bg-gray-200" />
        <div className="h-4 w-3/4 animate-pulse rounded bg-gray-200" />
      </div>

      <div className="mt-4 flex gap-4">
        <div className="h-4 w-24 animate-pulse rounded bg-gray-200" />
        <div className="h-4 w-32 animate-pulse rounded bg-gray-200" />
      </div>
    </div>
  );
};
