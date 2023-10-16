import {createStore} from 'redux'
import expensesReducer from './expenseReducer'

const store2 = createStore(expensesReducer)

export default store2;