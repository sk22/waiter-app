import { combineReducers } from 'redux'

import scenarios from './Scenarios/scenariosReducer'
import products from './Products/productsReducer'
import orders from './Orders/ordersReducer'

export { scenarios, products, orders }
export default combineReducers({ scenarios, products, orders })
