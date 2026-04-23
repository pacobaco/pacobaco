import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'pacobaco — Live Systems Topology',
  description: 'Profile-as-app surface for pacobaco repositories, grouped into AI, finance, network, and infrastructure layers.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
