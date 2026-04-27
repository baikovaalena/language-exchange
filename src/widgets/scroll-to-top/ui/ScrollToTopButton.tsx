'use client';

import { ActionIcon } from '@mantine/core';
import { IconArrowUp } from '@tabler/icons-react';
import clsx from 'clsx';
import { scrollToTop } from '@shared/lib/scroll/scrollToTop';
import { useIsScrolled } from '../model/useIsScrolled';
import styles from './ScrollToTopButton.module.scss';

export const ScrollToTopButton = () => {
  const visible = useIsScrolled();

  return (
    <ActionIcon
      className={clsx(styles.button, visible && styles.visible)}
      onClick={() => scrollToTop()}
      aria-label="Наверх"
      size="xl"
      radius="xl"
      color="#2563eb"
      variant="filled"
    >
      <IconArrowUp size={22} stroke={2} />
    </ActionIcon>
  );
};
