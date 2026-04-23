import { CSSVariablesResolver, createTheme, rem } from '@mantine/core';

export const theme = createTheme({
  fontFamily: "var(--font-inter), 'Inter', sans-serif",
  fontFamilyMonospace: 'monospace',

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
    fontFamily: "var(--font-inter), 'Inter', sans-serif",
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

  other: {
    // ── Font sizes (только для не-Mantine элементов) ──────
    'fs-sm': '13px',
    'fs-base': '15px',
    'fs-xl': '18px',
    'fs-hero-sub': 'clamp(15px, 2vw, 17px)',
    'fs-hero': 'clamp(2.1rem, 5vw, 3.5rem)',
    'fs-section': 'clamp(1.6rem, 4vw, 2.4rem)',
  },

  components: {
    Text: {
      defaultProps: {
        size: 'md',
      },
    },
    Title: {
      defaultProps: {
        c: 'var(--color-text-primary)',
      },
    },
    Anchor: {
      defaultProps: {
        underline: 'hover',
      },
    },
  },
});

export const cssVariablesResolver: CSSVariablesResolver = (t) => ({
  variables: Object.fromEntries(
    Object.entries(t.other as Record<string, string>).map(([key, value]) => [`--${key}`, value]),
  ),
  light: {},
  dark: {},
});
