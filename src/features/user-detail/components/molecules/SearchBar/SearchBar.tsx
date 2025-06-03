import { useState, KeyboardEvent } from 'react';
import { Input } from '@/shared/components/atoms/Input/Input';
import { Button } from '@/shared/components/atoms/Button/Button';

interface SearchBarProps {
  onSearch: (value: string) => void;
  loading?: boolean;
  placeholder?: string;
  className?: string;
}

export const SearchBar = ({
  onSearch,
  loading = false,
  placeholder = 'Search GitHub username...',
  className,
}: SearchBarProps) => {
  const [searchValue, setSearchValue] = useState('');

  const handleSearch = () => {
    if (searchValue.trim()) {
      onSearch(searchValue.trim());
    }
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };

  return (
    <div className={`flex gap-2 ${className}`}>
      <Input
        value={searchValue}
        onChange={(e) => setSearchValue(e.target.value)}
        onKeyDown={handleKeyDown}
        placeholder={placeholder}
        disabled={loading}
        className="flex-1"
      />
      <Button onClick={handleSearch} isLoading={loading} disabled={!searchValue.trim() || loading}>
        Search
      </Button>
    </div>
  );
};
