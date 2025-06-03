import { useStyles } from '@/shared/hooks/useStyles';
import { commonStyles } from '@/shared/hooks/useStyles';
import { colors, typography } from '@/shared/constants/designTokens';

interface ErrorAlertProps {
  error: string | null;
  className?: string;
}

export const ErrorAlert = ({ error, className }: ErrorAlertProps) => {
  const { getStyles } = useStyles({
    baseStyles: `rounded-md p-4 ${typography.fontSize.sm} text-[${colors.error[700]}] bg-[${colors.error[50]}]`,
    defaultVariant: 'default',
  });

  if (!error) return null;

  return (
    <div className={getStyles({ className })} role="alert">
      <div className={commonStyles.flexStart}>
        <svg
          className={`mr-2 h-4 w-4 text-[${colors.error[500]}]`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          aria-hidden="true"
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
