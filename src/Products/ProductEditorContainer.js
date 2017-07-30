import { connect } from 'react-redux'
import {
  setProductName,
  setProductCategory,
  removeProduct
} from './productsActions'
import ProductEditor from './ProductEditor'

const mapStateToProps = ({ products }, { match: { params: { id } } }) => ({
  categories: [
    ...new Set(Object.values(products).map(product => product.category))
  ],
  product: products[id]
})

const mapDispatchToProps = (dispatch, { history, match }) => ({
  history,
  onChangeName: name => dispatch(setProductName({ id: match.params.id, name })),
  onChangeCategory: category =>
    dispatch(setProductCategory({ id: match.params.id, category })),
  onRemove: () => {
    history.goBack()
    dispatch(removeProduct(match.params.id))
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(ProductEditor)
