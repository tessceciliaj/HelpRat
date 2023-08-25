'use client'
import { useState } from 'react'
import { useRouter } from 'next/navigation'
import supabase from '@/lib/supabase-client'
import { LogoBig } from '@/components/Logo'
import Toaster from '@/components/Toaster'

export default function Login() {
  const [toaster, setToaster] = useState(null)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  // use this view to switch between views
  // 'login', 'register', 'reset-password', 'check-email'
  const [view, setView] = useState('login')

  const router = useRouter()

  const register = async () => {
    const { error } = await supabase.auth.signUp({
      email,
      password,
    })

    if (error) {
      setToaster({ message: error.message })
      return
    }
  }

  const login = async () => {
    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    })

    if (error) {
      setToaster({ message: error.message })
      return
    }

    router.refresh()
    router.push('/')
  }

  const resetPassword = async () => {
    console.log('reset password not avaliable yet')
    // await supabase.auth.resetPasswordForEmail(email, {
    //   redirectTo: `${process.env.BASE_URL}/login/update-password`,
    // })
  }

  const handleOnSubmit = e => {
    e.preventDefault()

    switch (view) {
      case 'login':
        login()
        break
      case 'register':
        register()
        break
      case 'reset-password':
        resetPassword()
        break
    }
  }

  return (
    <main className="flex min-h-screen flex-col items-center">
      <div className="pt-20">
        <LogoBig />
      </div>
      <form>
        <div className="relative mb-4">
          <input
            onChange={e => setEmail(e.target.value)}
            type="email"
            id="email"
            placeholder="Email"
            className="mt-16 w-full rounded border-2 border-neutral-400 p-2"
          />
          <label htmlFor="email" className="sr-only">
            Email
          </label>
          <input
            onChange={e => setPassword(e.target.value)}
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
          <button
            onClick={e => handleOnSubmit(e)}
            className="mb-2 rounded bg-neutral-900 p-4 font-semibold text-neutral-100">
            Log in
          </button>
          <button type="button">
            <p className="mb-0 mr-2 text-sm font-semibold text-neutral-700">
              Don&apos;t have an account? Register
            </p>
          </button>
        </div>
      </form>
      {toaster && (
        <Toaster message={toaster.message} onClose={() => setToaster(null)} />
      )}
    </main>
  )
}
