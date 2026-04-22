'use client';

import { QueryClientProvider } from '@tanstack/react-query';
import { QueryClient } from '@tanstack/react-query';
import { useState } from 'react';

export function Providers({ children }: { children: React.ReactNode }) {
  const [queryClient] = useState(
    () =>
      new QueryClient({
        defaultOptions: {
          queries: { staleTime: 60 * 1000 },
          // данные считаются “свежими” 60 секунд (берется из кэша), после 60 сек новый запрос
          // staleTime: когда данные устаревают
          // cacheTime: сколько живёт кэш
          // refetchOnWindowFocus: обновление при возврате вкладки
          // retry: повторы запросов при ошибке
        },
      }),
  );

  return <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>;
}
