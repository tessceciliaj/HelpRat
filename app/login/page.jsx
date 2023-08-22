import { LogoBig } from '@/components/Logo'

export default function Login() {
  return (
    <main className="flex min-h-screen flex-col items-center">
      <div className="pt-20">
        <LogoBig />
      </div>
      <form>
        <div className="relative mb-4">
          <input
            type="text"
            id="username"
            placeholder="Username"
            className="mt-16 w-full rounded border-2 border-neutral-400 p-2"
          />
          <label htmlFor="username" className="sr-only">
            Username
          </label>
          <input
            type="password"
            id="password"
            placeholder="Password"
            className="my-2 w-full rounded border-2 border-neutral-400 p-2"
          />
          <label htmlFor="password" className="sr-only">
            Password
          </label>
          <button className="w-full text-right text-sm font-semibold text-neutral-700">
            Forgot password?
          </button>
        </div>
        <div className="mb-12 flex flex-col pb-1 pt-1 text-center">
          <button className="mb-2 rounded bg-neutral-900 p-4 font-semibold text-neutral-100">
            Log in
          </button>
          <button type="button">
            <p className="mb-0 mr-2 text-sm font-semibold text-neutral-700">
              Don&apos;t have an account? Register
            </p>
          </button>
        </div>
      </form>
    </main>
  )
}
