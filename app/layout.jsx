import './globals.css'
import { Lexend } from 'next/font/google'

const lexend = Lexend({ subsets: ['latin'], variable: ['--font-lexend'] })

export const metadata = {
  title: 'helpRat',
  description: 'Todo-list',
  icons: {
    icon: '/favicon.svg',
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${lexend.variable} bg-neutral-200 font-sans`}>
        {children}
      </body>
    </html>
  )
}
