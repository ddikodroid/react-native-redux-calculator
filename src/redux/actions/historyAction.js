import { ADD_HIST, CLEAR_HIST } from './historyTypes'

let nextId = 2

export const addHistory = (equation) => ({
  type: ADD_HIST,
  data: {
    id: nextId++,
    equation: equation
  }
})

export const clearHistory = () => ({
  type: CLEAR_HIST
})
