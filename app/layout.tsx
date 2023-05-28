import type { Metadata } from 'next';
import './globals.css';
import { Rubik } from 'next/font/google';

const rubikFonts = Rubik({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

export default function RootLayout({
  children,
  analytics,
  team,
}: {
  children: React.ReactNode;
  analytics: React.ReactNode;
  team: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body suppressHydrationWarning={true} className={rubikFonts.className}>
        Hello i am root layout
        {children}
        {team}
        {analytics}
      </body>
    </html>
  );
}
