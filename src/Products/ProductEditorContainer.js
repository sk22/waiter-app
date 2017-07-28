import { connect } from 'react-redux'
import { setProductName, setProductCategory } from './productsActions'
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

const mapDispatchToProps = (dispatch, { onRemove, history, match }) => ({
  history,
  onRemove: () => onRemove(match.params.id),
  onChangeName: name => dispatch(setProductName({ id: match.params.id, name })),
  onChangeCategory: category =>
    dispatch(setProductCategory({ id: match.params.id, category }))
})

export default connect(mapStateToProps, mapDispatchToProps)(ProductEditor)
