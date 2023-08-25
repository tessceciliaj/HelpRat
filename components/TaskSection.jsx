'use client'
import { useRouter } from 'next/navigation'
import { addTask, updateTask } from '@/lib/routes'
import Task from './Task'
import TaskModule from './TaskModule'
import Toaster from './Toaster'
import { useState } from 'react'

const TaskSection = ({ tasks, userId }) => {
  const [toaster, setToaster] = useState(null)

  const router = useRouter()

  const handleNewTask = async task => {
    const { data, error, status } = await addTask(task, userId)

    if (error) {
      setToaster({ message: error.message })
      return
    }

    router.refresh()
  }

  const handleUpdateTask = async (id, done) => {
    const { data, error, status } = await updateTask(id, done)

    if (error) {
      setToaster({ message: error.message })
      return
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
      {toaster && (
        <Toaster message={toaster.message} onClose={() => setToaster(null)} />
      )}
    </section>
  )
}

export default TaskSection
