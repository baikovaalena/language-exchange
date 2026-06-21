import { MantineProvider as MantineProviderRoot } from '@mantine/core';
import type { ReactNode } from 'react';
import { theme } from './theme';

interface IProps {
  children: ReactNode;
}

export const MantineProvider = ({ children }: IProps) => (
  <MantineProviderRoot theme={theme} defaultColorScheme="auto">
    {children}
  </MantineProviderRoot>
);
