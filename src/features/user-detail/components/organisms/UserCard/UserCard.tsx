import Image from 'next/image';
import { GitHubUser } from '@/features/user-detail/types';
import { Stats } from '@/shared/components';
import { cardStyles } from '@/shared/constants/featureStyles';

interface UserCardProps {
  user: GitHubUser;
  onClick?: () => void;
  className?: string;
}

export const UserCard = ({ user, onClick, className }: UserCardProps) => {
  const stats = [
    { icon: 'users' as const, label: 'followers', value: user.followers },
    { icon: 'repos' as const, label: 'repositories', value: user.public_repos },
  ];

  return (
    <div
      className={`${cardStyles.dark.base} ${onClick ? 'cursor-pointer' : ''} ${className}`}
      onClick={onClick}
    >
      <div className="flex items-center gap-4">
        <div className="relative h-16 w-16 overflow-hidden rounded-full">
          <Image
            src={user.avatar_url}
            alt={`${user.login}'s avatar`}
            fill
            className="object-cover"
            sizes="64px"
          />
        </div>
        <div className="flex-1">
          <h2 className={cardStyles.dark.title}>{user.name}</h2>
          <p className={cardStyles.dark.subtitle}>@{user.login}</p>
        </div>
      </div>

      {user.bio && <p className={`${cardStyles.dark.description} mt-4`}>{user.bio}</p>}

      <Stats items={stats} theme="dark" className="mt-4" />
    </div>
  );
};
