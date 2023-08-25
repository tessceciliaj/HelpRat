'use client'
import { useRouter } from 'next/navigation'
import { addTask, updateTask } from '@/lib/routes'
import Task from './Task'
import TaskModule from './TaskModule'

const TaskSection = ({ tasks, userId }) => {
  const router = useRouter()

  const handleNewTask = async task => {
    const { data, error, status } = await addTask(task, userId)

    if (error) {
      console.log(error)
      // handle error
    }

    router.refresh()
  }

  const handleUpdateTask = async (id, done) => {
    const { data, error, status } = await updateTask(id, done)

    if (error) {
      console.log(error)
      // handle error
    }

    router.refresh()
  }

  return (
    <section className="mt-16 flex flex-col gap-6 self-start">
      {tasks &&
        tasks.map(todo => (
          <Task key={todo.name} handleUpdateTask={handleUpdateTask} {...todo} />
        ))}
      <TaskModule handleNewTask={handleNewTask} />
    </section>
  )
}

export default TaskSection
