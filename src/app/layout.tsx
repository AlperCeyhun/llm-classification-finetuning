import React from 'react';
import "./globals.css";
import { Inter } from 'next/font/google';


const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'LLM RPP',
  description: 'LLM Response Preference Prediction',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className='bg-black text-white'>
        {children}
      </body>
    </html>
  );
}