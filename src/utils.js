export const excludeFromArray = array => values =>
  array.filter(v => !values.includes(v))

export const objectExcludingKeys = object => keys =>
  excludeFromArray(Object.keys(object))(keys).reduce(
    (pre, cur) => ({ ...pre, [cur]: object[cur] }),
    {}
  )

export const objectExcludingFilter = object => filter => {
  const keys = Object.keys(object)
  return Object.values(object)
    .filter(filter)
    .reduce((pre, cur, i) => ({ ...pre, [keys[i]]: cur }), {})
}
