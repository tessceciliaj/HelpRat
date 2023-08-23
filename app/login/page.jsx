'use client'
import { useState } from 'react'
import { useRouter } from 'next/navigation'
import supabase from '@/lib/supabase-client'
import { LogoBig } from '@/components/Logo'

export default function Login() {
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
      console.log({ error })
      // handle error
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

  const switchToView = newView => {
    setEmail('')
    setPassword('')
    setView(newView)
  }

   return (
     <main className="flex min-h-screen flex-col items-center">
       <div className="pt-20">
         <LogoBig />
       </div>
       <form>
         <div className="relative mb-4">
           {view === 'reset-password' ? (
             // Display only email input field for reset-password view
             <input
               onChange={e => setEmail(e.target.value)}
               type="email"
               id="email"
               placeholder="Email"
               className="mt-16 w-full rounded border-2 border-neutral-400 p-2"
             />
           ) : (
             <>
               <input
                 onChange={e => setEmail(e.target.value)}
                 type="email"
                 id="email"
                 placeholder="Email"
                 className="mt-16 w-full rounded border-2 border-neutral-400 p-2"
               />
               {view !== 'check-email' && (
                 <input
                   onChange={e => setPassword(e.target.value)}
                   type="password"
                   id="password"
                   placeholder="Password"
                   className="my-2 w-full rounded border-2 border-neutral-400 p-2"
                 />
               )}
               {/* Render "Forgot password?" link only for the login view */}
               {view === 'login' && (
                 <button
                   type="button"
                   onClick={() => setView('reset-password')}
                   className="w-full text-right text-sm font-semibold text-neutral-700">
                   Forgot password?
                 </button>
               )}
             </>
           )}
         </div>
         <div className="mb-12 flex flex-col pb-1 pt-1 text-center">
           {view === 'check-email' ? (
             <p className="mb-0 text-sm font-semibold text-neutral-700">
               Thank you for registering! Please check your email to confirm.
             </p>
           ) : (
             <>
               <button
                 onClick={e => handleOnSubmit(e)}
                 className="mb-2 rounded bg-neutral-900 p-4 font-semibold text-neutral-100">
                 {view === 'login'
                   ? 'Log in'
                   : view === 'register'
                   ? 'Register'
                   : 'Send Reset Link'}
               </button>
               <button
                 type="button"
                 onClick={() =>
                   switchToView(view === 'register' ? 'login' : 'register')
                 }>
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
     </main>
   )
}
