export const categoryProducts = products => {
  const categories = new Set(
    Object.values(products).map(product => product.category)
  )
  return Array.from(categories).reduce(
    (object, category) => ({
      ...object,
      [category]: Object.keys(products).filter(
        id => products[id].category === category
      )
    }),
    {}
  )
}
