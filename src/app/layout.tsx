import '@/styles/globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { ThemeProvider } from '@/components/ThemeProvider'
import { DesktopNav } from '@/components/DesktopNav'
import { MobileNav } from '@/components/MobileNav'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Radovan Draskovic - Portfolio & Blog',
  description: 'My personal portfolio and blog website',
  icons: {
    icon: '/favicon.ico',
    apple: '/apple-touch-icon.png',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} min-h-screen bg-white dark:bg-gray-900 dark:text-white transition-colors duration-300`}>
        <ThemeProvider defaultTheme="system" storageKey="theme">
          <header className="bg-primary-700 dark:bg-primary-900 text-white shadow-md relative">
            <nav className="container-narrow py-5">
              <div className="flex justify-between items-center">
                <div className="text-xl font-bold">
                  <a href="/" className="hover:text-primary-200">Radovan Drašković</a>
                </div>
                
                {/* Desktop Navigation */}
                <DesktopNav />
                
                {/* Mobile Navigation */}
                <MobileNav />
              </div>
            </nav>
          </header>
          <main className="container-narrow py-8 text-gray-900 dark:text-gray-100">
            {children}
          </main>
          <footer className="bg-primary-800 dark:bg-primary-950 text-white">
            <div className="container-narrow py-6">
              <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
                <div className="text-center md:text-left">&copy; {new Date().getFullYear()} Drashko73</div>
                <div className="flex flex-wrap justify-center gap-4 md:space-x-4 md:gap-0">
                  <a href="https://github.com/Drashko73" className="hover:text-primary-200">GitHub</a>
                  <a href="https://linkedin.com/in/radovan-draskovic" className="hover:text-primary-200">LinkedIn</a>
                  <a href="https://www.youtube.com/@Drashko73" className="hover:text-primary-200">YouTube</a>
                </div>
              </div>
            </div>
          </footer>
        </ThemeProvider>
      </body>
    </html>
  )
}