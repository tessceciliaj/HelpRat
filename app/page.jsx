import { cookies } from 'next/headers'
import { createServerComponentClient } from '@supabase/auth-helpers-nextjs'
import { getUserTasks } from '@/lib/routes'
import Header from '@/components/Header'
import TaskSection from '@/components/TaskSection'

export const dynamic = 'force-dynamic'

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
    <main className="min-h-screen w-full max-w-3xl">
      <Header />
      <TaskSection tasks={tasks} userId={session.user.id} />
    </main>
  )
}
