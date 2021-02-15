import { ADD_HIST, CLEAR_HIST } from './historyTypes'
let nextId = 0
export const addHistory = (data) => ({
  type: ADD_HIST,
  payload: {
    id: nextId++,
    equation: data
  }
})

export const clearHistory = () => ({ type: CLEAR_HIST })
