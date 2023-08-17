import Link from 'next/link'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center">
      <div>Welcome, Login</div>
      <Link href="/todo">
        <button className="bg-blue-500 hover:bg-blue-700 text-white rounded px-4 py-2 font-bold">
          Go to App
        </button>
      </Link>
    </main>
  )
}
