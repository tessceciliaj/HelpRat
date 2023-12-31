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
      <body
        className={`flex flex-col items-center justify-center bg-neutral-200 p-6 ${lexend.variable} font-sans`}>
        {children}
      </body>
    </html>
  )
}
