import Link from 'next/link'

export default function Login() {
  return (
    <main className="flex min-h-screen flex-col items-center">
      <div>HelpRat Login</div>
      <Link href="/">
        <button className="m-8 rounded-md bg-neutral-700 p-4 text-neutral-100 hover:bg-accent">
          Go to App
        </button>
      </Link>
    </main>
  )
}