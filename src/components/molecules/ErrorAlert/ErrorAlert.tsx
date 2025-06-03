interface ErrorAlertProps {
  error: string | null;
  className?: string;
}

export const ErrorAlert = ({ error, className }: ErrorAlertProps) => {
  if (!error) return null;

  return (
    <div
      className={`rounded-md bg-red-50 p-4 text-sm text-red-700 ${className}`}
      role="alert"
    >
      <div className="flex items-center">
        <svg
          className="mr-2 h-4 w-4 text-red-500"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
        <p>{error}</p>
      </div>
    </div>
  );
};
