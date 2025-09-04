// @ts-nocheck
import './globals.css';
import { ReactNode } from 'react';
import { cookies } from 'next/headers';
import TopNav from '../components/TopNav';


export const metadata = {
  title: 'REPOpilot',
  description: 'A tool to help you manage, navigate, and automate repositories effectively',
  icons: { icon: '/favicon.svg' }

};

export default function RootLayout({ children }: { children: ReactNode }) {
  const isLoggedIn = cookies().has('github_token');
  return (
    <html lang="en">
      <body className="min-h-screen bg-black text-zinc-200">
        <header className="border-b border-zinc-800 bg-zinc-900/60 backdrop-blur sticky top-0 z-20">
          <TopNav isLoggedIn={isLoggedIn} />
        </header>
        {children}
      </body>

    </html>
  );
}
