import { Skeleton } from '@/shared/components';
import { skeletonStyles } from '@/shared/constants/featureStyles';

interface UserCardSkeletonProps {
  className?: string;
}

export const UserCardSkeleton = ({ className }: UserCardSkeletonProps) => {
  return (
    <div className={`${skeletonStyles.light.base} ${className}`}>
      <div className="flex items-center gap-4">
        <Skeleton type="avatar" theme="light" />
        <div className="flex-1 space-y-2">
          <Skeleton type="text" size="md" theme="light" />
          <Skeleton type="text" size="sm" theme="light" />
        </div>
      </div>

      <div className="mt-4 space-y-2">
        <Skeleton type="text" size="sm" theme="light" />
        <Skeleton type="text" size="sm" theme="light" className="w-3/4" />
      </div>

      <div className="mt-4 flex gap-4">
        <Skeleton type="text" size="sm" theme="light" className="w-24" />
        <Skeleton type="text" size="sm" theme="light" className="w-32" />
      </div>
    </div>
  );
};
