import { skeletonStyles } from '@/shared/constants/featureStyles';

interface SkeletonProps {
  type: 'avatar' | 'text';
  size?: 'sm' | 'md' | 'lg';
  theme?: 'light' | 'dark';
  className?: string;
}

export const Skeleton = ({ type, size = 'md', theme = 'light', className }: SkeletonProps) => {
  if (type === 'avatar') {
    return <div className={`${skeletonStyles[theme].avatar} ${className}`} />;
  }

  return <div className={`${skeletonStyles[theme].text[size]} ${className}`} />;
};
