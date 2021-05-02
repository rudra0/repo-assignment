import { combineReducers } from 'redux'
import productReducer from './products/productReducer'

const reducers = combineReducers({
  products: productReducer 
})

export default reducers