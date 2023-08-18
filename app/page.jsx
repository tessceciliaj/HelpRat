import Link from 'next/link'
import Header from '@/components/Header'
import { getTasks } from '@/lib/routes'

export default async function Home() {
  const tasks = await getTasks()
  console.log(tasks)

  return (
    <main className="flex min-h-screen flex-col items-center">
      <Header />
      <div>HelpRat App</div>
      <Link href="/login">
        <button className="m-8 rounded-md bg-neutral-700 p-4 text-neutral-100 hover:bg-accent">
          Go to Login
        </button>
      </Link>
    </main>
  )
}
