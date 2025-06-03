'use client';

import Link from 'next/link';
import { useParams } from 'next/navigation';
import { RepositoryCard } from '@/features/repositories/components/organisms/RepositoryCard/RepositoryCard';
import { RepositorySkeleton } from '@/features/repositories/components/organisms/RepositoryCard/RepositorySkeleton';
import { ErrorAlert } from '@/shared/components/molecules/ErrorAlert/ErrorAlert';
import { useRepositories } from '@/features/repositories/hooks/useRepositories';

export default function UserRepositories() {
  const params = useParams();
  const username = params.username as string;
  const { repositories, loading, error } = useRepositories(username);

  return (
    <div className="min-h-screen bg-[#222] p-8">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-4xl font-bold text-center text-white mb-2">
          {username}&apos;s Repositories
        </h1>
        <p className="text-center text-gray-400 mb-10">Public repositories on GitHub</p>

        <ErrorAlert error={error} />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {loading
            ? // Show 4 skeleton cards while loading
              [...Array(4)].map((_, index) => <RepositorySkeleton key={index} />)
            : repositories.map((repo) => <RepositoryCard key={repo.id} repository={repo} />)}
        </div>

        <div className="mt-10 text-center">
          <Link href="/" className="inline-flex items-center text-blue-400 hover:underline">
            <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M10 19l-7-7m0 0l7-7m-7 7h18"
              />
            </svg>
            Back to Search
          </Link>
        </div>
      </div>
    </div>
  );
}
