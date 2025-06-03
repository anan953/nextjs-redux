export interface Repository {
  id: number;
  name: string;
  description: string | null;
  stargazers_count: number;
  forks_count: number;
  language: string | null;
  html_url: string;
  updated_at: string;
}

export interface RepositoryError {
  message: string;
  status?: number;
}

export const LANGUAGE_COLORS: Record<string, string> = {
  JavaScript: 'bg-yellow-400',
  TypeScript: 'bg-blue-400',
  Python: 'bg-green-400',
  Java: 'bg-orange-400',
  Ruby: 'bg-red-400',
  PHP: 'bg-purple-400',
  Go: 'bg-cyan-400',
  Rust: 'bg-orange-500',
  C: 'bg-gray-400',
  'C++': 'bg-gray-500',
  'C#': 'bg-green-500',
  Swift: 'bg-orange-300',
  Kotlin: 'bg-purple-500',
  HTML: 'bg-red-500',
  CSS: 'bg-blue-500',
  Shell: 'bg-green-300',
  default: 'bg-gray-300',
};
