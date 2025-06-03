import Link from 'next/link';
import { Repository } from '@/features/repositories/types';

interface RepositoryCardProps {
  repository: Repository;
  className?: string;
}

export const RepositoryCard = ({ repository, className }: RepositoryCardProps) => {
  return (
    <Link
      href={repository.html_url}
      target="_blank"
      rel="noopener noreferrer"
      className={`block rounded-lg border border-gray-700 bg-[#2d2d2d] p-6 text-white transition-colors hover:border-gray-600 hover:bg-[#363636] ${className}`}
    >
      <div className="flex items-start justify-between">
        <div className="flex-1">
          <h3 className="text-lg font-semibold text-blue-400">{repository.name}</h3>
          {repository.description && (
            <p className="mt-2 text-sm text-gray-400 line-clamp-2">{repository.description}</p>
          )}
        </div>
        {repository.language && (
          <span className="ml-4 rounded-full bg-[#1f1f1f] px-2 py-1 text-xs text-gray-300">
            {repository.language}
          </span>
        )}
      </div>

      <div className="mt-4 flex flex-wrap gap-4 text-sm text-gray-400">
        <div className="flex items-center gap-1">
          <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
            />
          </svg>
          <span>{repository.stargazers_count}</span>
        </div>
        <div className="flex items-center gap-1">
          <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z"
            />
          </svg>
          <span>{repository.forks_count}</span>
        </div>
      </div>
    </Link>
  );
};
