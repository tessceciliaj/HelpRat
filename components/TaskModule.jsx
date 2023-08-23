'use client'
import * as Dialog from '@radix-ui/react-dialog'
import { Plus } from 'lucide-react'

const TaskModule = () => {
  return (
    <Dialog.Root>
      <Dialog.Trigger asChild>
        <button className="fixed bottom-4 right-4 flex h-8 w-8 items-center justify-center rounded-full bg-neutral-900 hover:scale-110">
          <Plus color="#fff" className="h-6 w-6" />
        </button>
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 bg-neutral-900 opacity-25" />
        <Dialog.Content className="h-22 fixed bottom-0 flex w-full flex-col items-center justify-center rounded-tl-2xl rounded-tr-2xl bg-neutral-200 p-6 text-base">
          <input
            className="mb-4 w-full border-b-2 border-neutral-400 text-neutral-900 outline-none placeholder:text-neutral-400"
            placeholder="Add task..."
          />
          <Dialog.Close asChild>
            <button className="w-full rounded-lg bg-neutral-900 py-4 text-center text-neutral-100">
              Done
            </button>
          </Dialog.Close>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  )
}

export default TaskModule
