import { cookies } from 'next/headers'
import { createServerComponentClient } from '@supabase/auth-helpers-nextjs'
import { Plus } from 'lucide-react'
import { getUserTasks } from '@/lib/routes'
import Header from '@/components/Header'
import TaskModule from '@/components/TaskModule'
import Todo from '@/components/Todo'

export default async function Home() {
  const supabase = createServerComponentClient({ cookies })
  const {
    data: { session },
  } = await supabase.auth.getSession()

  const { data: tasks, error, status } = await getUserTasks(session.user.id)

  if (error) {
    console.log(error.message)
    // handle error
  }

  return (
    <main className="w-full max-w-3xl">
      <Header />
      <section className="mt-16 flex flex-col gap-6 self-start">
        {tasks && tasks.map(todo => <Todo key={todo.name} {...todo} />)}
      </section>
      <TaskModule />
      <div className="flex h-8 w-8 items-center justify-center rounded-full bg-neutral-900 hover:scale-110">
        <Plus color="#fff" className="h-6 w-6" />
      </div>
    </main>
  )
}
