import { badgeStyles } from '@/shared/constants/featureStyles';

interface BadgeProps {
  children: React.ReactNode;
  variant?: 'default' | 'primary';
  theme?: 'light' | 'dark';
  className?: string;
}

export const Badge = ({
  children,
  variant = 'default',
  theme = 'light',
  className,
}: BadgeProps) => {
  return (
    <span className={`${badgeStyles[theme].base} ${badgeStyles[theme][variant]} ${className}`}>
      {children}
    </span>
  );
};
