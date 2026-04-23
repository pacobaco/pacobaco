import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'pacobaco — Live Systems Topology',
  description: 'Live GitHub-powered systems profile for pacobaco.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
