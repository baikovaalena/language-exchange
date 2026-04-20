import { ColorSchemeScript, MantineProvider, mantineHtmlProps } from '@mantine/core';
import { inter } from '@/shared/fonts';
import '@mantine/core/styles.css';
import '@mantine/notifications/styles.css';
import './globals.css';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" {...mantineHtmlProps} className={inter.variable}>
      <head>
        <ColorSchemeScript />
      </head>
      <body>
        <MantineProvider>{children}</MantineProvider>
      </body>
    </html>
  );
}
