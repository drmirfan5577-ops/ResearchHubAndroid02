// Research & Analytics Hub – Design Tokens
export const Colors = {
  // Base
  background: '#060D1F',
  surface: '#0D1B2E',
  surfaceElevated: '#112240',
  surfaceBorder: '#1E3A5F',

  // Brand
  primary: '#00C9A7',
  primaryDark: '#009E85',
  primaryLight: '#33D4B8',
  accent: '#4FC3F7',
  accentGold: '#FFB800',

  // Text
  textPrimary: '#E8F4FD',
  textSecondary: '#8AAEC8',
  textMuted: '#4A6A8A',
  textOnPrimary: '#FFFFFF',

  // Semantic
  success: '#00C9A7',
  warning: '#FFB800',
  error: '#FF5A6A',
  info: '#4FC3F7',

  // Categories
  catResearch: '#00C9A7',
  catMedical: '#FF6B9D',
  catJournal: '#7C6BFF',
  catVideo: '#FF8C42',
  catCommunity: '#4FC3F7',
  catOpenAccess: '#FFB800',
  catCopyright: '#00D4AA',

  // Overlay
  overlay: 'rgba(6, 13, 31, 0.85)',
};

export const Typography = {
  fontSizeXS: 11,
  fontSizeSM: 13,
  fontSizeBase: 16,
  fontSizeMD: 18,
  fontSizeLG: 20,
  fontSizeXL: 24,
  fontSizeXXL: 28,

  fontWeightRegular: '400' as const,
  fontWeightMedium: '500' as const,
  fontWeightSemiBold: '600' as const,
  fontWeightBold: '700' as const,
  fontWeightExtraBold: '800' as const,

  lineHeightBody: 24,
  lineHeightHeading: 32,
};

export const Spacing = {
  xs: 4,
  sm: 8,
  md: 16,
  lg: 24,
  xl: 32,
  xxl: 48,
};

export const Radius = {
  sm: 8,
  md: 12,
  lg: 16,
  xl: 24,
  full: 999,
};

export const Shadow = {
  card: {
    shadowColor: '#00C9A7',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.15,
    shadowRadius: 8,
    elevation: 4,
  },
  elevated: {
    shadowColor: '#4FC3F7',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 12,
    elevation: 8,
  },
};
