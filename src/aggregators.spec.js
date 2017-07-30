import { categoryProducts } from './aggregators'

test('lists products per category', () => {
  const expected = { c1: ['p1', 'p3'], c2: ['p2'], '': ['p4'] }
  const actual = categoryProducts({
    p1: { category: 'c1' },
    p2: { category: 'c2' },
    p3: { category: 'c1' },
    p4: { category: '' }
  })
  expect(actual).toEqual(expected)
})
