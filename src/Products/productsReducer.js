import { createReducer } from 'redux-act'
import { objectExcludingKeys } from '../utils'

import {
  createProduct,
  removeProduct,
  setProductName,
  setProductCategory
} from './productsActions.js'

export default createReducer(
  {
    [createProduct]: (state, { id, name, category }) => ({
      ...state,
      [id]: { name, category }
    }),
    [removeProduct]: (state, id) => objectExcludingKeys(state)([id]),
    [setProductName]: (state, { id, name }) => ({
      ...state,
      [id]: { ...state[id], name }
    }),
    [setProductCategory]: (state, { id, category }) => ({
      ...state,
      [id]: { ...state[id], category }
    })
  },
  {}
)
