interface RepositorySkeletonProps {
  className?: string;
}

export const RepositorySkeleton = ({ className }: RepositorySkeletonProps) => {
  return (
    <div className={`rounded-lg border border-gray-700 bg-[#2d2d2d] p-6 ${className}`}>
      <div className="flex items-start justify-between">
        <div className="flex-1">
          <div className="h-6 w-32 animate-pulse rounded bg-gray-700" />
          <div className="mt-2 space-y-2">
            <div className="h-4 w-full animate-pulse rounded bg-gray-700" />
            <div className="h-4 w-3/4 animate-pulse rounded bg-gray-700" />
          </div>
        </div>
        <div className="ml-4 h-5 w-16 animate-pulse rounded-full bg-gray-700" />
      </div>

      <div className="mt-4 flex gap-4">
        <div className="h-4 w-12 animate-pulse rounded bg-gray-700" />
        <div className="h-4 w-12 animate-pulse rounded bg-gray-700" />
        <div className="h-4 w-12 animate-pulse rounded bg-gray-700" />
      </div>
    </div>
  );
};
