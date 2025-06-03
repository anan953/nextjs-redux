"use client";

import { useRouter } from "next/navigation";
import { SearchBar } from "@/features/user-detail/components/molecules/SearchBar/SearchBar";
import { UserCard } from "@/features/user-detail/components/organisms/UserCard/UserCard";
import { ErrorAlert } from "@/components/molecules/ErrorAlert/ErrorAlert";
import { UserCardSkeleton } from "@/features/user-detail/components/organisms/UserCard/UserCardSkeleton";
import { useGithubSearch } from "@/features/user-detail/hooks/useGithubSearch";

export default function Home() {
  const router = useRouter();
  const { user, loading, error, searchUser } = useGithubSearch();

  const handleUserCardClick = () => {
    if (user) {
      router.push(`/users/${user.login}`);
    }
  };

  return (
    <div className="min-h-screen p-8">
      <main className="max-w-2xl mx-auto">
        <h1 className="text-3xl font-bold text-center mb-8">
          GitHub User Search
        </h1>

        <SearchBar onSearch={searchUser} loading={loading} className="mb-8" />

        <ErrorAlert error={error} />

        {loading ? (
          <UserCardSkeleton />
        ) : (
          user && <UserCard user={user} onClick={handleUserCardClick} />
        )}
      </main>
    </div>
  );
}
