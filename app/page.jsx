import { getTasks } from '@/lib/routes'
import Header from '@/components/Header'
import Todo from '@/components/Todo'

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
    <main className="flex min-h-screen flex-col items-center">
      <Header />
      <section className="mt-16 flex flex-col gap-6 self-start px-6">
        {mockTodos.map(todo => (
          <Todo key={todo.name} {...todo} />
        ))}
      </section>
    </main>
  )
}
