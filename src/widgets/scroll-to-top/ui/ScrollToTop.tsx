'use client';

import { ActionIcon } from '@mantine/core';
import { IconArrowUp } from '@tabler/icons-react';
import { scrollToTop, useIsScrolled } from '@shared/lib/scroll/scroll';
import styles from './ScrollToTop.module.scss';

const SCROLL_THRESHOLD = 400;

export function ScrollToTop() {
  const visible = useIsScrolled(SCROLL_THRESHOLD);

  return (
    <ActionIcon
      className={`${styles.button} ${visible ? styles.visible : ''}`}
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
}
