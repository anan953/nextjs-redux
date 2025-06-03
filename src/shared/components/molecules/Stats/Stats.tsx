import { Icon } from '@/shared/components';
import { cardStyles } from '@/shared/constants/featureStyles';

interface StatItem {
  icon: 'star' | 'fork' | 'users' | 'repos';
  label: string;
  value: number;
}

interface StatsProps {
  items: StatItem[];
  theme?: 'light' | 'dark';
  className?: string;
}

export const Stats = ({ items, theme = 'light', className }: StatsProps) => {
  return (
    <div className={`flex flex-wrap gap-4 ${className}`}>
      {items.map((item, index) => (
        <div key={index} className={`flex items-center gap-1 ${cardStyles[theme].stats}`}>
          <Icon name={item.icon} theme={theme} />
          <span>
            {item.value.toLocaleString()} {item.label}
          </span>
        </div>
      ))}
    </div>
  );
};
