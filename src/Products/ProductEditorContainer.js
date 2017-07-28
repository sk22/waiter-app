import { connect } from 'react-redux'
import {
  setProductName,
  setProductCategory
} from './productsActions'
import ProductEditor from './ProductEditor'

const mapStateToProps = (
  { products },
  { categories, match: { params: { id } } }
) => ({
  categories,
  product: products[id],
  name: products[id] && products[id].name,
  category: products[id] && products[id].category
})

const mapDispatchToProps = (
  dispatch,
  { onRemove, history, match: { params: { id } } }
) => ({
  history,
  onRemove: () => onRemove(id),
  onChangeName: name => dispatch(setProductName({ id, name })),
  onChangeCategory: category => dispatch(setProductCategory({ id, category }))
})

export default connect(mapStateToProps, mapDispatchToProps)(ProductEditor)
