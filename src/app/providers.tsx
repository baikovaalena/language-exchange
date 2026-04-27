'use client';

import { MantineProvider } from '@mantine/core';
import { cssVariablesResolver, theme } from './theme';

export const Providers = ({ children }: { children: React.ReactNode }) => {
  return (
    <MantineProvider theme={theme} cssVariablesResolver={cssVariablesResolver}>
      {children}
    </MantineProvider>
  );
};
