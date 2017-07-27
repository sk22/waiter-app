import { createReducer } from 'redux-act'

import {
  addOrder,
  removeOrder,
  removeOrderProduct,
  setOrderAttributes,
  setOrderDelivered,
  setOrderProduct,
  setOrderScenario
} from './ordersActions'
import { objectExcludingKeys } from '../utils'

export default createReducer(
  {
    [addOrder]: (state, { id, scenario }) => ({
      ...state,
      [id]: {
        scenario,
        delivered: false,
        attributes: {},
        products: {}
      }
    }),
    [setOrderDelivered]: (state, { id, delivered }) => ({
      ...state,
      [id]: { ...state[id], delivered }
    }),
    [setOrderProduct]: (state, { id, product, quantity }) => ({
      ...state,
      [id]: {
        ...state[id],
        products: {
          ...state[id].products,
          [product]: quantity
        }
      }
    }),
    [setOrderAttributes]: (state, { id, attributes }) => ({
      ...state,
      [id]: {
        ...state[id],
        attributes: { ...state[id].attributes, ...attributes }
      }
    }),
    [removeOrderProduct]: (state, { id, product }) => ({
      ...state,
      [id]: {
        ...state[id],
        products: objectExcludingKeys(state[id].products)([product])
      }
    }),
    [setOrderScenario]: (state, { id, scenario }) => ({
      ...state,
      [id]: { ...state[id], scenario }
    }),
    [removeOrder]: (state, id) => objectExcludingKeys(state)([id])
  },
  {}
)
