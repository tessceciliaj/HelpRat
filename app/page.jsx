import Header from '@/components/Header'
import Todo from '@/components/Todo'

export default function Home() {
  const mockTodos = [
    {
      name: 'test',
      done: false,
    },
    {
      name: 'hello',
      done: true,
    },
  ]

  return (
    <main className="flex min-h-screen flex-col items-center">
      <Header />
      {mockTodos.map(todo => (
        <Todo key={todo.name} />
      ))}
    </main>
  )
}
