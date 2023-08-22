'use client'
import { useEffect } from 'react'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

const Toaster = () => {
  const notify = () => toast('Error')

  useEffect(() => {
    const button = document.getElementById('notifyButton')
    if (button) {
      button.addEventListener('click', notify)
    }

    return () => {
      if (button) {
        button.removeEventListener('click', notify)
      }
    }
  }, [])

  return (
    <div>
      <button id="notifyButton">Test Error Toaster</button>
      <ToastContainer
        position="bottom-left"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
    </div>
  )
}

export default Toaster
