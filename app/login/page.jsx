'use client'
import { useState } from 'react'
import { useRouter } from 'next/navigation'
import supabase from '@/lib/supabase-client'
import Logo from '@/components/Logo'

export default function Login() {
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
      console.log({ error })
      // handle error
      return
    }
  }

  const login = async () => {
    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    })

    if (error) {
      console.log({ error })
      // handle error
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
      <Logo />
      <form>
        <div className="relative mb-4">
          <input
            onChange={e => setEmail(e.target.value)}
            type="email"
            id="email"
            placeholder="Email"
          />
          <label htmlFor="email">Email</label>
          <input
            onChange={e => setPassword(e.target.value)}
            type="password"
            id="password"
            placeholder="Password"
          />
          <label htmlFor="password">Password</label>
          <button>Forgot password?</button>
        </div>
        <div className="mb-12 pb-1 pt-1 text-center">
          <button onClick={e => handleOnSubmit(e)}>Log in</button>
          <button type="button">
            <p className="mb-0 mr-2">Don&apos;t have an account? Register</p>
          </button>
        </div>
      </form>
    </main>
  )
}
