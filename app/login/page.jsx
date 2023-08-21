import Logo from '@/components/Logo'

export default function Login() {
  return (
    <main className="flex min-h-screen flex-col items-center">
      <Logo />
      <form>
        <div className="relative mb-4">
          <input type="text" id="username" placeholder="Username" />
          <label htmlFor="username">Username</label>
          <input type="password" id="password" placeholder="Password" />
          <label htmlFor="password">Password</label>
          <button>Forgot password?</button>
        </div>
        <div className="mb-12 pb-1 pt-1 text-center">
          <button>Log in</button>
          <button type="button">
            <p className="mb-0 mr-2">Don&apos;t have an account? Register</p>
          </button>
        </div>
      </form>
    </main>
  )
}
