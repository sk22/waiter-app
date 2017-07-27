import reducer from './scenariosReducer'
import {
  addScenario,
  removeScenarioProduct,
  removeScenario,
  setScenarioProduct,
  setScenarioName
} from './scenariosActions'

const initialState = {
  s1: {
    name: 'Festival',
    products: {
      p1: 3.5,
      p2: 7
    }
  },
  s2: { name: 'Party', products: {} }
}

test('adds a scenario', () => {
  const state = reducer(
    initialState,
    addScenario({ id: 's3', name: 'Restaurant', products: { p1: 2 } })
  )
  expect(state).toEqual({
    s1: {
      name: 'Festival',
      products: {
        p1: 3.5,
        p2: 7
      }
    },
    s2: { name: 'Party', products: {} },
    s3: { name: 'Restaurant', products: { p1: 2 } }
  })
})

test('removes a scenario', () => {
  const state = reducer(initialState, removeScenario('s1'))
  expect(state).toEqual({
    s2: { name: 'Party', products: {} }
  })
})

test('sets a scenario name', () => {
  const state = reducer(
    initialState,
    setScenarioName({ id: 's1', name: 'Fest' })
  )
  expect(state.s1.name).toBe('Fest')
})

test("sets a product's price", () => {
  const state = reducer(
    initialState,
    setScenarioProduct({ id: 's1', product: 'p1', price: 10 })
  )
  expect(state.s1.products).toEqual({
    p1: 10,
    p2: 7
  })
})

test("sets a new product's price", () => {
  const state = reducer(
    initialState,
    setScenarioProduct({ id: 's1', product: 'p3', price: 10 })
  )
  expect(state.s1.products).toEqual({
    p1: 3.5,
    p2: 7,
    p3: 10
  })
})

test('removes a product', () => {
  const state = reducer(
    initialState,
    removeScenarioProduct({ id: 's1', product: 'p1' })
  )
  expect(state.s1.products).toEqual({ p2: 7 })
})
