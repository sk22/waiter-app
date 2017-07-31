import { combineReducers } from 'redux'

import environments from './Environments/environmentsReducer'
import products from './Products/productsReducer'
import orders from './Orders/ordersReducer'

export { environments, products, orders }
export default combineReducers({ environments, products, orders })
