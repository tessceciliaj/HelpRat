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
    <main className="w-full max-w-3xl">
      <Header />
      <section className="mt-16 flex flex-col gap-6 self-start">
        {mockTodos.map(todo => (
          <Todo key={todo.name} {...todo} />
        ))}
      </section>
    </main>
  )
}
