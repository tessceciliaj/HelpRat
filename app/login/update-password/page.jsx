'use client'
import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { LogoBig } from '@/components/Logo'
import supabase from '@/lib/supabase-client'

const UpdatePassword = () => {
 const [newPassword, setNewPassword] = useState('')
 const router = useRouter()

 const handleUpdatePassword = async () => {
    await supabase.auth.updateUser({
        passwrd: newPassword
    })
    router.refresh()
 }

  return (
    <form className=" flex flex-col">
      <div className="pt-20">
        <LogoBig />
      </div>
      <label className="sr-only">
        New password
        </label>
        <input
          type="password"
          name="password"
          onChange={e => setNewPassword(e.target.value)}
          value={newPassword}
          placeholder="Your new password"
          className="my-2 w-full rounded border-2 border-neutral-400 p-2 mt-16"
          style={{ boxShadow: '0 0 0 30px white inset' }}
        />
      <button onClick={handleUpdatePassword}  className="mt-4 rounded bg-neutral-900 p-4 font-semibold text-neutral-100">
        Reset password
      </button>
    </form>
  )
}

export default UpdatePassword