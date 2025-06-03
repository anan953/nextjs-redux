import { useMemo } from 'react';
import { twMerge } from 'tailwind-merge';

type VariantStyles = Record<string, string>;
type SizeStyles = Record<string, string>;

interface UseStylesOptions {
  baseStyles: string;
  variants?: VariantStyles;
  sizes?: SizeStyles;
  defaultVariant?: string;
  defaultSize?: string;
}

export const useStyles = ({
  baseStyles,
  variants = {},
  sizes = {},
  defaultVariant,
  defaultSize,
}: UseStylesOptions) => {
  const getStyles = useMemo(
    () =>
      ({
        variant = defaultVariant,
        size = defaultSize,
        className,
      }: {
        variant?: string;
        size?: string;
        className?: string;
      } = {}) => {
        const variantStyles = variant ? variants[variant] : '';
        const sizeStyles = size ? sizes[size] : '';

        return twMerge(baseStyles, variantStyles, sizeStyles, className);
      },
    [baseStyles, variants, sizes, defaultVariant, defaultSize]
  );

  return { getStyles };
};

// Common style presets
export const commonStyles = {
  focusRing: 'focus:outline-none focus:ring-1 focus:ring-offset-1 focus:ring-[#bae6fd]',
  disabled: 'disabled:pointer-events-none disabled:opacity-50',
  transition: 'transition-colors duration-200',
  flexCenter: 'flex items-center justify-center',
  flexBetween: 'flex items-center justify-between',
  flexStart: 'flex items-center justify-start',
  flexEnd: 'flex items-center justify-end',
  gridCenter: 'grid place-items-center',
  truncate: 'truncate',
  ellipsis: 'overflow-hidden text-ellipsis whitespace-nowrap',
} as const;
