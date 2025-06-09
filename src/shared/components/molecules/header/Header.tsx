import { useAuth } from '@/contexts/AuthContext';

export const Header = () => {
  const { logout } = useAuth();

  return (
    <header className="bg-gray-800 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold">GitHub User Search</h1>
      </div>
      <button className="bg-red-500 text-white px-4 py-2 rounded-md" onClick={logout}>
        Logout
      </button>
    </header>
  );
};
