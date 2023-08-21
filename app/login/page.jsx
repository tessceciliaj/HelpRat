import Link from 'next/link'
import Logo from '@/components/Logo'

export default function Login() {
  return (
    <main className="flex min-h-screen flex-col items-center">
      <Logo />
      <form>
        <div className="relative mb-4">
          <input type="text" id="username" placeholder="Username" />
          <label htmlFor="username">Username</label>
        </div>
        <div className="relative mb-4">
          <input type="password" id="password" placeholder="Password" />
          <label htmlFor="password">Password</label>
        </div>
        <div className="mb-12 pb-1 pt-1 text-center">
          <button>Log in</button>
          <Link href="#!">Forgot password?</Link>
        </div>

        <div className="flex items-center justify-between pb-6">
          <button type="button">
            <p className="mb-0 mr-2">Don&apos;t have an account? Register</p>
          </button>
        </div>
      </form>
      <Link href="/">
        <button className="m-8 rounded-md bg-neutral-700 p-4 text-neutral-100 hover:bg-accent">
          Go to App
        </button>
      </Link>
    </main>
  )
}
