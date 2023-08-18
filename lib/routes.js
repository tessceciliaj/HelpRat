import supabase from './supabase-client'

const getTasks = async () => {
  const { data, error, status } = await supabase.from('tasks').select()
  return { data, error, status }
}

export { getTasks }
