import { Skeleton } from '@/shared/components';
import { skeletonStyles } from '@/shared/constants/featureStyles';

interface RepositorySkeletonProps {
  className?: string;
}

export const RepositorySkeleton = ({ className }: RepositorySkeletonProps) => {
  return (
    <div className={`${skeletonStyles.dark.base} ${className}`}>
      <div className="flex items-start justify-between">
        <div className="flex-1">
          <Skeleton type="text" size="lg" theme="dark" />
          <div className="mt-2 space-y-2">
            <Skeleton type="text" size="sm" theme="dark" />
            <Skeleton type="text" size="sm" theme="dark" className="w-3/4" />
          </div>
        </div>
        <Skeleton type="text" size="sm" theme="dark" className="ml-4 w-16" />
      </div>

      <div className="mt-4 flex gap-4">
        <Skeleton type="text" size="sm" theme="dark" className="w-12" />
        <Skeleton type="text" size="sm" theme="dark" className="w-12" />
      </div>
    </div>
  );
};
