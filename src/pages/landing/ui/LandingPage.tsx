import { Box, Group } from '@mantine/core';
import { ThemeToggle } from '@shared/ui/ThemeToggle';

export const LandingPage = () => {
  return (
    <Box>
      <Group justify="flex-end" p="md">
        <ThemeToggle />
      </Group>
    </Box>
  );
};
