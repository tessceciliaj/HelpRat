import Link from 'next/link'

export default function Todo() {
  return (
    <main className="flex min-h-screen flex-col items-center">
      <div>HelpRat ToDo</div>
      <Link href="/">
        <button className="bg-blue-500 hover:bg-blue-700 text-white rounded px-4 py-2 font-bold">
          Go to Login
        </button>
      </Link>
    </main>
  )
}
