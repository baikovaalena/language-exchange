import { createTheme, MantineProvider as MantineProviderRoot } from '@mantine/core';
import type { ReactNode } from 'react';

const theme = createTheme({
  fontFamily: 'Inter, system-ui, sans-serif',
  headings: {
    fontFamily: 'Inter, system-ui, sans-serif',
  },
});

interface IProps {
  children: ReactNode;
}

export function MantineProvider({ children }: IProps) {
  return <MantineProviderRoot theme={theme}>{children}</MantineProviderRoot>;
}
