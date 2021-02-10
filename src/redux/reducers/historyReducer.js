import { ADD_HIST, CLEAR_HIST } from '../actions/historyAction'

const initialState = {
  calculatorHist: [{
    id: 0,
    equation: '3*4=13'
  },
  {
    id: 1,
    equation: '9*13=58'
  }]
}

const historyReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_HIST:
      console.log(state.calculatorHist)
      return {
        ...state,
        calculatorHist: [...state.calculatorHist, action.data]
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
