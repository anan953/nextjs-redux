import { ButtonHTMLAttributes, ReactNode } from 'react';
import { useStyles } from '@/shared/hooks/useStyles';
import { commonStyles } from '@/shared/hooks/useStyles';
import { colors, transitions } from '@/shared/constants/designTokens';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: 'primary' | 'secondary' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  isLoading?: boolean;
  fullWidth?: boolean;
}

export const Button = ({
  children,
  variant = 'primary',
  size = 'md',
  isLoading = false,
  fullWidth = false,
  className,
  disabled,
  ...props
}: ButtonProps) => {
  const { getStyles } = useStyles({
    baseStyles: `${commonStyles.flexCenter} ${commonStyles.transition} ${commonStyles.focusRing} ${commonStyles.disabled} rounded-md font-medium`,
    variants: {
      primary: `bg-[${colors.primary[600]}] text-white hover:bg-[${colors.primary[700]}] focus-visible:ring-[${colors.primary[500]}] border border-[${colors.primary[600]}] hover:border-[${colors.primary[700]}]`,
      secondary: `bg-[${colors.gray[200]}] text-[${colors.gray[900]}] hover:bg-[${colors.gray[300]}] focus-visible:ring-[${colors.gray[500]}] border border-[${colors.gray[300]}] hover:border-[${colors.gray[400]}]`,
      ghost: `hover:bg-[${colors.gray[100]}] focus-visible:ring-[${colors.gray[500]}] border border-transparent hover:border-[${colors.gray[200]}]`,
    },
    sizes: {
      sm: 'h-8 px-3 text-sm',
      md: 'h-10 px-4 text-base',
      lg: 'h-12 px-6 text-lg',
    },
    defaultVariant: 'primary',
    defaultSize: 'md',
  });

  return (
    <button
      className={getStyles({ variant, size, className: fullWidth ? 'w-full' : className })}
      disabled={disabled || isLoading}
      {...props}
    >
      {isLoading && (
        <div
          className={`mr-2 h-4 w-4 animate-spin rounded-full border-2 border-current border-t-transparent ${transitions.DEFAULT}`}
          role="status"
          aria-label="Loading"
        />
      )}
      {children}
    </button>
  );
};
