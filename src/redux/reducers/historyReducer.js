import { ADD_HIST, CLEAR_HIST } from '../actions/historyAction'

const initialState = {
  calculatorHist: []
}

const historyReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_HIST:
      return {
        ...state,
        calculatorHist: [state.calculatorHist, action.data]
      }
    case CLEAR_HIST:
      return {
        initialState
      }
    default:
      return state
  }
}

export default historyReducer
