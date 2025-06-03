import { InputHTMLAttributes, forwardRef } from 'react';
import { useStyles } from '@/shared/hooks/useStyles';
import { commonStyles } from '@/shared/hooks/useStyles';
import { colors, typography } from '@/shared/constants/designTokens';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  error?: string;
  label?: string;
  helperText?: string;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ className, error, label, helperText, ...props }, ref) => {
    const { getStyles } = useStyles({
      baseStyles: `${commonStyles.transition} ${commonStyles.focusRing} ${commonStyles.disabled} w-full rounded-md border px-3 py-2 text-sm`,
      variants: {
        default: `border-[${colors.gray[300]}] placeholder:text-[${colors.gray[400]}] focus:border-transparent focus:ring-[${colors.primary[500]}]`,
        error: `border-[${colors.error[500]}] placeholder:text-[${colors.gray[400]}] focus:border-transparent focus:ring-[${colors.error[500]}]`,
      },
      defaultVariant: 'default',
    });

    const labelStyles = `${typography.fontSize.sm} font-[${typography.fontWeight.medium}] text-[${colors.gray[700]}] mb-1`;
    const helperTextStyles = `${typography.fontSize.sm} mt-1 ${
      error ? `text-[${colors.error[500]}]` : `text-[${colors.gray[500]}]`
    }`;

    return (
      <div className="w-full">
        {label && (
          <label className={labelStyles} htmlFor={props.id}>
            {label}
          </label>
        )}
        <input
          ref={ref}
          className={getStyles({ variant: error ? 'error' : 'default', className })}
          aria-invalid={error ? 'true' : 'false'}
          aria-describedby={error || helperText ? `${props.id}-description` : undefined}
          {...props}
        />
        {(error || helperText) && (
          <p id={`${props.id}-description`} className={helperTextStyles}>
            {error || helperText}
          </p>
        )}
      </div>
    );
  }
);

Input.displayName = 'Input';
