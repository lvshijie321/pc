import clsx from 'clsx';
import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Sidebar from './components/layout/Sidebar';
import Navbar from './components/layout/Navbar';
import '../../public/antd.min.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: '前端面试 PC 端',
  description: 'PC',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body className={clsx(inter.className, 'h-full flex overflow-hidden')}>
        <Sidebar className='flex-none hidden md:inline-block' />
        <section className='flex-1 flex flex-col overflow-hidden'>
          <Navbar className='flex-none' />
          <main className='flex-1 overflow-hidden bg-[#F5F5F5]'>
            {children}
          </main>
        </section>
      </body>
    </html>
  );
}
