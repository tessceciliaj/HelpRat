'use client'
import * as Checkbox from '@radix-ui/react-checkbox'
import { Check } from 'lucide-react'

const Todo = ({ name, done }) => {
  return (
    <div className="flex items-center gap-4 text-neutral-100">
      <Checkbox.Root className="peer h-5 w-5 appearance-none rounded-md border-2 border-neutral-400 aria-checked:border-0 aria-checked:bg-neutral-900">
        <Checkbox.Indicator>
          <Check size={20} />
        </Checkbox.Indicator>
      </Checkbox.Root>
      <p className="text-neutral-700 peer-aria-checked:text-neutral-400 peer-aria-checked:line-through">
        {name}
      </p>
    </div>
  )
}

export default Todo
