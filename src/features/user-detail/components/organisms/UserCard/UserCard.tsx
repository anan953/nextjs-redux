import Image from "next/image";
import { GitHubUser } from "@/features/user-detail/types";

interface UserCardProps {
  user: GitHubUser;
  onClick?: () => void;
  className?: string;
}

export const UserCard = ({ user, onClick, className }: UserCardProps) => {
  return (
    <div
      className={`rounded-lg border border-gray-200 bg-white p-6 shadow-sm transition-shadow hover:shadow-md ${
        onClick ? "cursor-pointer" : ""
      } ${className}`}
      onClick={onClick}
    >
      <div className="flex items-center gap-4">
        <div className="relative h-16 w-16 overflow-hidden rounded-full">
          <Image
            src={user.avatar_url}
            alt={`${user.login}'s avatar`}
            fill
            className="object-cover"
          />
        </div>
        <div className="flex-1">
          <h2 className="text-xl font-semibold text-gray-900">{user.name}</h2>
          <p className="text-sm text-gray-500">@{user.login}</p>
        </div>
      </div>

      {user.bio && (
        <p className="mt-4 text-sm text-gray-600 line-clamp-2">{user.bio}</p>
      )}

      <div className="mt-4 flex gap-4 text-sm text-gray-500">
        <div className="flex items-center gap-1">
          <svg
            className="h-4 w-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
            />
          </svg>
          <span>{user.followers} followers</span>
        </div>
        <div className="flex items-center gap-1">
          <svg
            className="h-4 w-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
            />
          </svg>
          <span>{user.public_repos} repositories</span>
        </div>
      </div>
    </div>
  );
};
