import { createStore, combineReducers } from 'redux'
import historyReducer from '../reducers/historyReducer'

const rootReducer = combineReducers({
  historyReducer: historyReducer
})

const store = () => createStore(rootReducer)

export default store
