import { colors, typography, shadows, transitions } from '@/shared/constants/designTokens';

export const cardStyles = {
  light: {
    base: `rounded-lg border border-[${colors.gray[200]}] bg-white p-6 ${shadows.sm} ${transitions.DEFAULT} hover:${shadows.md}`,
    title: `${typography.fontSize.xl} font-[${typography.fontWeight.semibold}] text-[${colors.gray[900]}]`,
    subtitle: `${typography.fontSize.sm} text-[${colors.gray[500]}]`,
    description: `${typography.fontSize.sm} text-[${colors.gray[600]}] line-clamp-2`,
    stats: `${typography.fontSize.sm} text-[${colors.gray[500]}]`,
  },
  dark: {
    base: `rounded-lg border border-[${colors.gray[700]}] bg-[#2d2d2d] p-6 ${transitions.DEFAULT} hover:bg-[#363636] hover:border-[${colors.gray[600]}]`,
    title: `${typography.fontSize.xl} font-[${typography.fontWeight.semibold}] text-[${colors.primary[400]}]`,
    subtitle: `${typography.fontSize.sm} text-[${colors.gray[400]}]`,
    description: `${typography.fontSize.sm} text-[${colors.gray[400]}] line-clamp-2`,
    stats: `${typography.fontSize.sm} text-[${colors.gray[400]}]`,
  },
} as const;

export const skeletonStyles = {
  light: {
    base: `rounded-lg border border-[${colors.gray[200]}] bg-white p-6 ${shadows.sm}`,
    avatar: `h-16 w-16 rounded-full bg-[${colors.gray[200]}] animate-pulse`,
    text: {
      sm: `h-4 w-24 rounded bg-[${colors.gray[200]}] animate-pulse`,
      md: `h-5 w-32 rounded bg-[${colors.gray[200]}] animate-pulse`,
      lg: `h-6 w-40 rounded bg-[${colors.gray[200]}] animate-pulse`,
    },
  },
  dark: {
    base: `rounded-lg border border-[${colors.gray[700]}] bg-[#2d2d2d] p-6`,
    avatar: `h-16 w-16 rounded-full bg-[${colors.gray[700]}] animate-pulse`,
    text: {
      sm: `h-4 w-24 rounded bg-[${colors.gray[700]}] animate-pulse`,
      md: `h-5 w-32 rounded bg-[${colors.gray[700]}] animate-pulse`,
      lg: `h-6 w-40 rounded bg-[${colors.gray[700]}] animate-pulse`,
    },
  },
} as const;

export const iconStyles = {
  base: 'h-4 w-4',
  light: `text-[${colors.gray[500]}]`,
  dark: `text-[${colors.gray[400]}]`,
} as const;

export const badgeStyles = {
  light: {
    base: `rounded-full px-2 py-1 ${typography.fontSize.xs} font-[${typography.fontWeight.medium}]`,
    default: `bg-[${colors.gray[100]}] text-[${colors.gray[700]}]`,
    primary: `bg-[${colors.primary[100]}] text-[${colors.primary[700]}]`,
  },
  dark: {
    base: `rounded-full px-2 py-1 ${typography.fontSize.xs} font-[${typography.fontWeight.medium}]`,
    default: `bg-[#1f1f1f] text-[${colors.gray[300]}]`,
    primary: `bg-[${colors.primary[900]}] text-[${colors.primary[300]}]`,
  },
} as const;
