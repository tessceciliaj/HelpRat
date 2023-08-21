import './globals.css'
import { Lexend } from 'next/font/google'

const lexend = Lexend({ subsets: ['latin'], variable: ['--font-lexend'] })

export const metadata = {
  title: 'helpRat',
  description: 'Todo-list',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`flex flex-col items-center justify-center p-6 ${lexend.variable} font-sans`}>
        {children}
      </body>{' '}
    </html>
  )
}
