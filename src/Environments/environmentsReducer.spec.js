import reducer from './environmentsReducer'
import {
  addEnvironment,
  removeEnvironmentProduct,
  removeEnvironment,
  setEnvironmentProduct,
  setEnvironmentName
} from './environmentsActions'

const initialState = {
  s1: {
    name: 'Festival',
    products: {
      p1: '3.50',
      p2: '7.00'
    }
  },
  s2: { name: 'Party', products: {} }
}

test('adds a environment', () => {
  const state = reducer(
    initialState,
    addEnvironment({ id: 's3', name: 'Restaurant', products: { p1: 2 } })
  )
  expect(state).toEqual({
    s1: {
      name: 'Festival',
      products: {
        p1: '3.50',
        p2: '7.00'
      }
    },
    s2: { name: 'Party', products: {} },
    s3: { name: 'Restaurant', products: { p1: '2.00' } }
  })
})

test('removes a environment', () => {
  const state = reducer(initialState, removeEnvironment('s1'))
  expect(state).toEqual({
    s2: { name: 'Party', products: {} }
  })
})

test('sets a environment name', () => {
  const state = reducer(
    initialState,
    setEnvironmentName({ id: 's1', name: 'Fest' })
  )
  expect(state.s1.name).toBe('Fest')
})

test("sets a product's price", () => {
  const state = reducer(
    initialState,
    setEnvironmentProduct({ id: 's1', product: 'p1', price: '10.00' })
  )
  expect(state.s1.products).toEqual({
    p1: 10,
    p2: 7
  })
})

test("sets a new product's price", () => {
  const state = reducer(
    initialState,
    setEnvironmentProduct({ id: 's1', product: 'p3', price: '10.00' })
  )
  expect(state.s1.products).toEqual({
    p1: '3.50',
    p2: '7.00',
    p3: '10.00'
  })
})

test('removes a product', () => {
  const state = reducer(
    initialState,
    removeEnvironmentProduct({ id: 's1', product: 'p1' })
  )
  expect(state.s1.products).toEqual({ p2: '7.00' })
})
