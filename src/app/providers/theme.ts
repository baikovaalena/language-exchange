import { createTheme } from '@mantine/core';
import type { MantineColorsTuple } from '@mantine/core';
import { rem } from '@mantine/core';

const FONT_STACK = 'Onest, system-ui, sans-serif';

export const theme = createTheme({
  primaryColor: 'primary',
  primaryShade: { light: 5, dark: 8 },
  defaultRadius: 'md',
  fontFamily: FONT_STACK,
  autoContrast: true,
  luminanceThreshold: 0.3,

  colors: {
    primary: [
      '#e7f2ff',
      '#d1e0ff',
      '#a2bef9',
      '#709af3',
      '#467bee',
      '#2563eb',
      '#1a5eec',
      '#084ed2',
      '#0045bd',
      '#003ba7',
    ] as MantineColorsTuple,
    accent: [
      '#e9faf0',
      '#ddefe4',
      '#bfdac9',
      '#9ec5ad',
      '#7aae8e',
      '#6fa885',
      '#65a27d',
      '#538e6a',
      '#477e5d',
      '#376e4e',
    ] as MantineColorsTuple,
    warm: [
      '#fff1e7',
      '#f8e3d7',
      '#eac5b1',
      '#dda587',
      '#d18a63',
      '#cb794c',
      '#c97242',
      '#b15f31',
      '#9f532a',
      '#8b461f',
    ] as MantineColorsTuple,
    cta: [
      '#f1f8f4',
      '#e4eee7',
      '#c4dccc',
      '#a0c9ae',
      '#83ba95',
      '#70b085',
      '#65ab7d',
      '#54966a',
      '#49855d',
      '#2d5a3d',
    ] as MantineColorsTuple,
    success: [
      '#e6fff7',
      '#d3fbee',
      '#a7f6dc',
      '#78f2c9',
      '#53eeb8',
      '#3eecae',
      '#30eba8',
      '#21d093',
      '#10b981',
      '#00a06e',
    ] as MantineColorsTuple,
    warning: [
      '#fff7e2',
      '#ffedcd',
      '#fcd99e',
      '#f9c46b',
      '#f7b23f',
      '#f6a724',
      '#f59e0b',
      '#da8c04',
      '#c37c00',
      '#a96a00',
    ] as MantineColorsTuple,
    purple: [
      '#f3eaff',
      '#e0d1ff',
      '#bca1fb',
      '#8b5cf6',
      '#7741f3',
      '#6325f2',
      '#5916f2',
      '#490ad8',
      '#4007c2',
      '#3502ab',
    ] as MantineColorsTuple,
  },

  fontSizes: {
    xs: rem(12),
    sm: rem(13),
    md: rem(15),
    lg: rem(16),
    xl: rem(18),
  },

  lineHeights: {
    xs: '1.2',
    sm: '1.4',
    md: '1.6',
    lg: '1.7',
    xl: '1.75',
  },

  headings: {
    fontFamily: FONT_STACK,
    fontWeight: '600',
    sizes: {
      h1: { fontSize: rem(48), lineHeight: '1.1', fontWeight: '700' },
      h2: { fontSize: rem(36), lineHeight: '1.2', fontWeight: '700' },
      h3: { fontSize: rem(28), lineHeight: '1.25', fontWeight: '600' },
      h4: { fontSize: rem(22), lineHeight: '1.3', fontWeight: '600' },
      h5: { fontSize: rem(18), lineHeight: '1.35', fontWeight: '600' },
      h6: { fontSize: rem(16), lineHeight: '1.4', fontWeight: '600' },
    },
  },

  spacing: {
    xs: rem(8),
    sm: rem(12),
    md: rem(16),
    lg: rem(24),
    xl: rem(32),
  },

  radius: {
    xs: rem(4),
    sm: rem(6),
    md: rem(8),
    lg: rem(12),
    xl: rem(16),
  },

  other: {
    fontWeights: {
      regular: 400,
      medium: 500,
      semibold: 600,
      bold: 700,
    },
  },
});
