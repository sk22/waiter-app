import { createReducer } from 'redux-act'

import {
  addScenario,
  removeScenarioProduct,
  removeScenario,
  setScenarioProduct,
  setScenarioName
} from './scenariosActions'
import { objectExcludingKeys } from '../utils'

export default createReducer(
  {
    [addScenario]: (state, { id, name, products = {} }) => ({
      ...state,
      [id]: { name, products }
    }),
    [setScenarioName]: (state, { id, name }) => ({
      ...state,
      [id]: { ...state[id], name }
    }),
    [setScenarioProduct]: (state, { id, product, price }) => ({
      ...state,
      [id]: {
        ...state[id],
        products: {
          ...state[id].products,
          [product]: price
        }
      }
    }),
    [removeScenarioProduct]: (state, { id, product }) => ({
      ...state,
      [id]: {
        ...state[id],
        products: objectExcludingKeys(state[id].products)([product])
      }
    }),
    [removeScenario]: (state, id) => objectExcludingKeys(state)([id])
  },
  {}
)
