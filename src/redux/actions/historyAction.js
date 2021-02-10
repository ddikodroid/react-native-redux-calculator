import { ADD_HIST, CLEAR_HIST } from './historyTypes'

export const addHistory = (result) => ({
  type: ADD_HIST,
  data: result
})

export const clearHistory = () => ({
  type: CLEAR_HIST
})
