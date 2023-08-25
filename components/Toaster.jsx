'use client'
import { useEffect } from 'react'
import { AlertCircle } from 'lucide-react'

const Toaster = ({ message, onClose }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onClose()
    }, 3200)
    return () => clearTimeout(timer)
  }, [onClose])

  return (
    <div className="absolute bottom-4 left-4 flex items-center gap-4 rounded-lg bg-accent px-8 py-4 text-neutral-100">
      <AlertCircle />
      <p>{message}</p>
    </div>
  )
}

export default Toaster
