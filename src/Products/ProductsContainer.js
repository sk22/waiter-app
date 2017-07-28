import { connect } from 'react-redux'
import { generate } from 'shortid'
import { createProduct } from './productsActions'
import Products from './Products'

const mapStateToProps = ({ products }) => {
  const categories = [
    ...new Set(...[Object.values(products).map(product => product.category)])
  ]
  const productsByCategory = Object.values(categories).reduce(
    (object, category) => ({
      ...object,
      [category]: Object.keys(products).filter(
        id => products[id].category === category
      )
    }),
    {}
  )
  return { productsByCategory, products }
}
const mapDispatchToProps = dispatch => ({
  onAdd: ({ name, category }) =>
    dispatch(createProduct({ id: generate(), name, category }))
})

export default connect(mapStateToProps, mapDispatchToProps)(Products)
