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
    // When successful registration
    setView('check-email')
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

    // if (error) {
    //   setToaster({ message: error.message })
    //   return
    // }
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

  const switchToView = newView => {
    setEmail('')
    setPassword('')
    setView(newView)
  }

  return (
    <main className="min-h-screen w-full max-w-xl">
      <div className="pt-20">
        <LogoBig />
      </div>
      <form onSubmit={e => handleOnSubmit(e)} className="">
        <div className="mb-4 w-full">
          {view !== 'check-email' && (
            // Display only email input field for reset-password view
            <input
              onChange={e => setEmail(e.target.value)}
              type="email"
              id="email"
              placeholder="Email"
              className="mt-16 w-full rounded border-2 border-neutral-400 p-2"
            />
          )}
          {view !== 'check-email' && view !== 'reset-password' && (
            <input
              onChange={e => setPassword(e.target.value)}
              type="password"
              id="password"
              placeholder="Password"
              className="my-2 w-full rounded border-2 border-neutral-400 p-2"
            />
          )}
          {view === 'login' && (
            <button
              type="button"
              onClick={e => {
                e.preventDefault()
                setView('reset-password')
              }}
              className="w-full text-right text-sm font-semibold text-neutral-700">
              Forgot password?
            </button>
          )}
        </div>
        <div className="mb-12 flex w-full flex-col pb-1 pt-1 text-center">
          {view === 'check-email' ? (
            <>
              <p className="mt-16 font-semibold text-neutral-700">
                Thank you for registering!
              </p>
              <p className="text-neutral-700">
                Please check your email to confirm.
              </p>
            </>
          ) : (
            <>
              <button className="mb-2 rounded bg-neutral-900 p-4 font-semibold text-neutral-100">
                {view === 'login'
                  ? 'Log in'
                  : view === 'register'
                  ? 'Register'
                  : 'Send Reset Link'}
              </button>
              <button
                type="button"
                onClick={e => {
                  e.preventDefault()
                  switchToView(view === 'register' ? 'login' : 'register')
                }}>
                <p className="mb-0 mr-2 text-sm font-semibold text-neutral-700">
                  {view === 'login'
                    ? "Don't have an account? Register"
                    : view === 'reset-password'
                    ? "Don't have an account? Register"
                    : 'Already have an account? Log in'}
                </p>
              </button>
            </>
          )}
        </div>
      </form>
      {toaster && (
        <Toaster message={toaster.message} onClose={() => setToaster(null)} />
      )}
    </main>
  )
}
