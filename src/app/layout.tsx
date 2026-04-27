import { mantineHtmlProps } from '@mantine/core';
import { inter } from '@/shared/fonts';
import '@mantine/core/styles.css';
import '@mantine/notifications/styles.css';
import './globals.css';
import { Providers } from './providers';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" {...mantineHtmlProps} className={inter.variable}>
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
