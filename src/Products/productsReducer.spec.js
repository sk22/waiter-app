import reducer from './productsReducer'
import {
  createProduct,
  removeProduct,
  setProductCategory,
  setProductName
} from './productsActions'

const initialState = {
  p1: { name: 'Drink', category: 'Beverages' },
  p2: { name: 'Meal', category: 'Food' }
}

test('creates a product', () => {
  const state = reducer(
    initialState,
    createProduct({ id: 'p3', name: 'Water', category: 'Beverages' })
  )
  expect(state).toEqual({
    p1: { name: 'Drink', category: 'Beverages' },
    p2: { name: 'Meal', category: 'Food' },
    p3: { name: 'Water', category: 'Beverages' }
  })
})

test('creates a product without category', () => {
  const state = reducer(
    initialState,
    createProduct({ id: 'p3', name: 'Water' })
  )
  expect(state).toEqual({
    p1: { name: 'Drink', category: 'Beverages' },
    p2: { name: 'Meal', category: 'Food' },
    p3: { name: 'Water', category: undefined }
  })
})

test('removes a product', () => {
  const state = reducer(initialState, removeProduct('p1'))
  expect(state).toEqual({
    p2: { name: 'Meal', category: 'Food' }
  })
})

test("sets a product's name", () => {
  const state = reducer(
    initialState,
    setProductName({ id: 'p2', name: 'Salad' })
  )
  expect(state.p2).toEqual({
    name: 'Salad',
    category: 'Food'
  })
})

test("sets a product's category", () => {
  const state = reducer(
    initialState,
    setProductCategory({ id: 'p2', category: 'Snacks' })
  )
  expect(state.p2).toEqual({
    name: 'Meal',
    category: 'Snacks'
  })
})
