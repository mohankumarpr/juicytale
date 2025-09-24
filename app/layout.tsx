import type { Metadata } from 'next'
import { Inter, Poppins } from 'next/font/google'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { ThemeProvider } from '@/contexts/ThemeContext'

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
})

const poppins = Poppins({ 
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-poppins',
})

export const metadata: Metadata = {
  title: 'JuicyTale - 100% Natural Fresh Fruit Premix',
  description: '100% Natural Fresh Fruit premix, without preservatives & artificial ingredients; targeted at Food & Beverage outlets. Franchise opportunities available.',
  keywords: 'natural fruit juice, fresh fruit premix, franchise, healthy beverages, zero preservatives',
  authors: [{ name: 'JuicyTale' }],
  icons: {
    icon: '/JT-Logo-web-1.png',
    shortcut: '/JT-Logo-web-1.png',
    apple: '/JT-Logo-web-1.png',
  },
  openGraph: {
    title: 'JuicyTale - 100% Natural Fresh Fruit Premix',
    description: '100% Natural Fresh Fruit premix, without preservatives & artificial ingredients; targeted at Food & Beverage outlets.',
    type: 'website',
    locale: 'en_US',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${poppins.variable}`} suppressHydrationWarning>
      <body className="font-sans antialiased bg-white dark:bg-gray-900 transition-colors duration-300">
        <ThemeProvider>
          <Header />
          <main>{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  )
}
