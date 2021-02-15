import { ADD_HIST, CLEAR_HIST } from '../actions/historyTypes'

const initialState = {
  calculatorHist: [{ equation: '1+2=3', id: 0 }]
}

const historyReducer = (state = initialState, action) => {
  console.log(CLEAR_HIST)
  switch (action.type) {
    case ADD_HIST:
      return {
        ...state,
        calculatorHist: state.calculatorHist.concat(action.payload)
      }
    case CLEAR_HIST:
      return {
        state
      }
    default:
      return state
  }
}

export default historyReducer
