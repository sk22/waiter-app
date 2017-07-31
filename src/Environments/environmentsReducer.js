import { createReducer } from 'redux-act'

import {
  addEnvironment,
  removeEnvironmentProduct,
  removeEnvironment,
  setEnvironmentProduct,
  setEnvironmentName
} from './environmentsActions'
import { objectExcludingKeys } from '../utils'

export default createReducer(
  {
    [addEnvironment]: (state, { id, name, products = {} }) => ({
      ...state,
      [id]: { name, products }
    }),
    [setEnvironmentName]: (state, { id, name }) => ({
      ...state,
      [id]: { ...state[id], name }
    }),
    [setEnvironmentProduct]: (state, { id, product, price }) => ({
      ...state,
      [id]: {
        ...state[id],
        products: {
          ...state[id].products,
          [product]: price
        }
      }
    }),
    [removeEnvironmentProduct]: (state, { id, product }) => ({
      ...state,
      [id]: {
        ...state[id],
        products: objectExcludingKeys(state[id].products)([product])
      }
    }),
    [removeEnvironment]: (state, id) => objectExcludingKeys(state)([id])
  },
  {}
)
