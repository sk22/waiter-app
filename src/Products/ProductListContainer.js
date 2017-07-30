import { connect } from 'react-redux'
import ProductList from './ProductList'
import { categoryProducts } from '../aggregators'

const mapStateToProps = ({ products }) => ({
  products,
  categoryProducts: categoryProducts(products)
})

export default connect(mapStateToProps)(ProductList)
