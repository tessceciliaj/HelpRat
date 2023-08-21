import Link from 'next/link'
import Header from '@/components/Header'
import { Plus } from 'lucide-react'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center">
      <Header />
      <div>HelpRat App</div>
      <Link href="/login">
        <button className="m-8 rounded-md bg-neutral-700 p-4 text-neutral-100 hover:bg-accent">
          Go to Login
        </button>
      </Link>

      <div className="flex h-8 w-8 items-center justify-center rounded-full bg-neutral-900">
        <Plus color="#fff" className="h-6 w-6" />
      </div>
    </main>
  )
}
