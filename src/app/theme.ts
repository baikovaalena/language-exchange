import { CSSVariablesResolver, createTheme, rem } from '@mantine/core';

import { FONT_STACK } from './constants';
import type { TThemeOther } from './types';

export const theme = createTheme({
  fontFamily: FONT_STACK,
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

  other: {
    // ── Font sizes (clamp-only; sm/md/xl → --mantine-font-size-*) ──
    'fs-hero-sub': 'clamp(0.9375rem, 2vw, 1.0625rem)',
    'fs-hero': 'clamp(2.1rem, 5vw, 3.5rem)',
    'fs-section': 'clamp(1.6rem, 4vw, 2.4rem)',
  } satisfies TThemeOther,

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

/** Maps `theme.other` keys to `--fs-hero`, `--fs-section`, etc. for SCSS; use `--mantine-font-size-*` for sm/md/xl. */
export const cssVariablesResolver: CSSVariablesResolver = (t) => {
  const themeOther = t.other as TThemeOther;
  return {
    variables: {
      '--fs-hero-sub': themeOther['fs-hero-sub'],
      '--fs-hero': themeOther['fs-hero'],
      '--fs-section': themeOther['fs-section'],
    },
    light: {},
    dark: {},
  };
};
