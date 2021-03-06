import { createReducer } from 'redux-act'

import {
  addOrder,
  removeOrder,
  removeOrderProduct,
  setOrderAttributes,
  setOrderDelivered,
  setOrderProduct,
  setOrderEnvironment
} from './ordersActions'
import { objectExcludingKeys } from '../utils'

export default createReducer(
  {
    [addOrder]: (state, { id, environment }) => ({
      ...state,
      [id]: {
        environment,
        delivered: false,
        attributes: {},
        products: {}
      }
    }),
    [setOrderDelivered]: (state, { id, delivered }) => ({
      ...state,
      [id]: { ...state[id], delivered }
    }),
    [setOrderProduct]: (state, { id, product, quantity }) =>
      quantity < 0
        ? state
        : {
            ...state,
            [id]: {
              ...state[id],
              products: {
                ...state[id].products,
                [product]: quantity
              }
            }
          },
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
    [setOrderEnvironment]: (state, { id, environment }) => ({
      ...state,
      [id]: { ...state[id], environment }
    }),
    [removeOrder]: (state, id) => objectExcludingKeys(state)([id])
  },
  {}
)
