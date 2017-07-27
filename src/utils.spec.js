import { excludeFromArray, objectExcludingKeys } from './utils'

test('excludeFromArray removes values', () => {
  expect(excludeFromArray(['a', 'b', 'c'])(['b', 'c'])).toEqual(['a'])
})

test('excludeFromArray ignores not existing value', () => {
  expect(excludeFromArray(['a', 'b', 'c'])(['x', 'c'])).toEqual(['a', 'b'])
})

test('objectExcludingKeys removes given keys', () => {
  expect(
    objectExcludingKeys({ a: 'foo', b: 'bar', c: 'baz' })(['b', 'a'])
  ).toEqual({
    c: 'baz'
  })
})
