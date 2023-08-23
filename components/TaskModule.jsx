import { useState } from 'react'
import * as Dialog from '@radix-ui/react-dialog'

const TaskModule = ({ handleNewTask }) => {
  const [task, setTask] = useState('')

  return (
    <Dialog.Root>
      <Dialog.Trigger asChild>
        <button>+</button>
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 bg-neutral-900 opacity-25" />
        <Dialog.Content className="h-22 fixed bottom-0 flex w-full flex-col items-center justify-center rounded-tl-2xl rounded-tr-2xl bg-neutral-200 p-6 text-base">
          <input
            className="mb-4 w-full border-b-2 border-neutral-400 bg-neutral-200 text-neutral-900 outline-none placeholder:text-neutral-400"
            placeholder="Add task..."
            onChange={e => setTask(e.target.value)}
          />
          <Dialog.Close asChild>
            <button
              onClick={() => handleNewTask(task)}
              className="w-full rounded-lg bg-neutral-900 py-4 text-center text-neutral-100">
              Done
            </button>
          </Dialog.Close>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  )
}

export default TaskModule
