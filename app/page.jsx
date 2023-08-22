import { getTasks } from '@/lib/routes'
import Header from '@/components/Header'
import Todo from '@/components/Todo'
import { Plus } from 'lucide-react'
import TaskModule from '@/components/TaskModule'
import Toaster from '@/components/Toaster'

export default async function Home() {
  const tasks = await getTasks()
  console.log(tasks)

  const mockTodos = [
    {
      name: 'buy milk',
      done: false,
    },
    {
      name: 'clean room',
      done: true,
    },
  ]

  return (
    <main className="max-w-3xl">
      <Header />
      <section className="mt-16 flex flex-col gap-6 self-start">
        {mockTodos.map(todo => (
          <Todo key={todo.name} {...todo} />
        ))}
      </section>
      <div className="flex h-8 w-8 items-center justify-center rounded-full bg-neutral-900 hover:scale-110">
        <Plus color="#fff" className="h-6 w-6" />
      </div>
      <TaskModule />
      <Toaster />
    </main>
  )
}
