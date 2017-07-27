import reducer from './ordersReducer'
import {
  addOrder,
  removeOrder,
  removeOrderProduct,
  setOrderProduct,
  setOrderDelivered,
  setOrderAttributes,
  setOrderScenario
} from './ordersActions'

const initialState = {
  o1: {
    scenario: 's1',
    delivered: false,
    attributes: {
      place: '13',
      note: ''
    },
    products: {
      p1: 4,
      p2: 3
    }
  }
}

test('adds an order', () => {
  const state = reducer(initialState, addOrder({ id: 'o2', scenario: 's1' }))
  expect(state).toEqual({
    ...initialState,
    o2: {
      scenario: 's1',
      delivered: false,
      attributes: {},
      products: {}
    }
  })
})

test('removes an order', () => {
  const state = reducer({ o1: {}, o2: {} }, removeOrder('o1'))
  expect(state).toEqual({ o2: {} })
})

test("sets an order's delivery status", () => {
  const state = reducer(
    initialState,
    setOrderDelivered({ id: 'o1', delivered: true })
  )
  expect(state.o1.delivered).toBe(true)
})

test("sets an order's attribute", () => {
  const state = reducer(
    initialState,
    setOrderAttributes({ id: 'o1', attributes: { note: 'test' } })
  )
  expect(state.o1).toEqual({
    scenario: 's1',
    delivered: false,
    attributes: {
      place: '13',
      note: 'test'
    },
    products: {
      p1: 4,
      p2: 3
    }
  })
})

test("sets an product's quanitity", () => {
  const state = reducer(
    initialState,
    setOrderProduct({ id: 'o1', product: 'p1', quantity: 10 })
  )
  expect(state.o1.products).toEqual({
    p1: 10,
    p2: 3
  })
})

test("sets a new product's quantity", () => {
  const state = reducer(
    initialState,
    setOrderProduct({ id: 'o1', product: 'p3', quantity: 10 })
  )
  expect(state.o1.products).toEqual({
    p1: 4,
    p2: 3,
    p3: 10
  })
})

test('removes a product from the order', () => {
  const state = reducer(
    initialState,
    removeOrderProduct({ id: 'o1', product: 'p1' })
  )
  expect(state.o1.products).toEqual({ p2: 3 })
})

test("sets an order's scenario", () => {
  const state = reducer(
    initialState,
    setOrderScenario({ id: 'o1', scenario: 's2' })
  )
  expect(state.o1.scenario).toBe('s2')
})
