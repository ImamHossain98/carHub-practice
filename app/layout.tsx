import { relative } from 'path';
import './globals.css';
import { Footer, Navbar } from '@/components';

export const metadata = {
  title: 'Car Hub',
  description: 'Discovers the best car in the world',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body suppressHydrationWarning={true} className="relative">
        <Navbar />
        {children}

        <Footer />
      </body>
    </html>
  );
}
