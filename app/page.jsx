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
    <main className="max-w-3xl">
      <Header />
      <div>HelpRat App</div>
      <Link href="/login">
        <button className="m-8 rounded-md bg-neutral-700 p-4 text-neutral-100 hover:bg-accent">
          Go to Login
        </button>
      </Link>
      <div className="m-6 flex items-center justify-center">
        <div className="max-w-3xl rounded bg-neutral-400 px-6 py-4">
          {mockTodos.map(todo => (
            <Todo key={todo.name} {...todo} />
          ))}
        </div>
      </div>
    </main>
  )
}
