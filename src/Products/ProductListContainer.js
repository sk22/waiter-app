import { connect } from 'react-redux'
import ProductList from './ProductList'

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

export default connect(mapStateToProps)(ProductList)
