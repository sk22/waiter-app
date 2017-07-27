export const excludeFromArray = array => values =>
  array.filter(v => !values.includes(v))

export const objectExcludingKeys = object => keys =>
  excludeFromArray(Object.keys(object))(keys).reduce(
    (pre, cur) => ({ ...pre, [cur]: object[cur] }),
    {}
  )
