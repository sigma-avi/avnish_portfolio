

import Footer from "@/components/Footer";
import "./globals.css";
import Navbar from "@/components/Navbar";
import { ThemeProvider } from "next-themes";
import type { Metadata } from 'next'
 
export const metadata: Metadata = {
  title: 'Avnish',
  description: '...',
}



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body >
        <ThemeProvider enableSystem={true} attribute="class" >
        <Navbar/>
        {children}
<Footer/>
        </ThemeProvider>
        </body>
    </html>
  );
}
