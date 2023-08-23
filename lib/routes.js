import supabase from './supabase-client.js'

const getUserTasks = async id => {
  if (!id) return { error: { message: 'Invalid user' } }

  const { data, error, status } = await supabase
    .from('tasks')
    .select()
    .eq('owner', id)

  return { data, error, status }
}

export { getUserTasks }
