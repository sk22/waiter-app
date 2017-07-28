import { connect } from 'react-redux'
import { generate } from 'shortid'
import { createProduct, removeProduct } from './productsActions'
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
const mapDispatchToProps = (dispatch, props) => ({
  onAdd: ({ name, category }) => {
    if (!name) return
    props.history.goBack()
    dispatch(createProduct({ id: generate(), name, category }))
  },
  onRemove: id => {
    props.history.goBack()
    dispatch(removeProduct(id))
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(Products)
