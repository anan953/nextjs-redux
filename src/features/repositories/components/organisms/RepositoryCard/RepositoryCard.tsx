import Link from 'next/link';
import { Repository } from '@/features/repositories/types';
import { Badge, Stats } from '@/shared/components';
import { cardStyles } from '@/shared/constants/featureStyles';

interface RepositoryCardProps {
  repository: Repository;
  className?: string;
}

export const RepositoryCard = ({ repository, className }: RepositoryCardProps) => {
  const stats = [
    { icon: 'star' as const, label: 'stars', value: repository.stargazers_count },
    { icon: 'fork' as const, label: 'forks', value: repository.forks_count },
  ];

  return (
    <Link
      href={repository.html_url}
      target="_blank"
      rel="noopener noreferrer"
      className={`${cardStyles.dark.base} ${className}`}
    >
      <div className="flex items-start justify-between">
        <div className="flex-1">
          <h3 className={cardStyles.dark.title}>{repository.name}</h3>
          {repository.description && (
            <p className={cardStyles.dark.description}>{repository.description}</p>
          )}
        </div>
        {repository.language && (
          <Badge theme="dark" variant="default" className="ml-4">
            {repository.language}
          </Badge>
        )}
      </div>

      <Stats items={stats} theme="dark" className="mt-4" />
    </Link>
  );
};
