import supabase from './supabase-client.js'

const getUserTasks = async id => {
  if (!id) return { error: { message: 'Invalid user' } }

  const { data, error, status } = await supabase
    .from('tasks')
    .select()
    .eq('owner', id)
    .order('created_at', { ascending: true })

  return { data, error, status }
}

const addTask = async (task, id) => {
  if (!id) return { error: { message: 'Invalid user' } }

  const { data, error, status } = await supabase
    .from('tasks')
    .insert({ name: task, owner: id })

  return { data, error, status }
}

const updateTask = async (id, done) => {
  if (!id) return { error: { message: 'Invalid task id' } }

  const { data, error, status } = await supabase
    .from('tasks')
    .update({ done: !done })
    .eq('id', id)

  return { data, error, status }
}

export { getUserTasks, addTask, updateTask }
