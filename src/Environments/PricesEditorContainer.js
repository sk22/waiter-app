import { connect } from 'react-redux'
import PricesEditor from './PricesEditor'
import {
  setEnvironmentProduct,
  removeEnvironmentProduct
} from './environmentsActions'
import { categoryProducts } from '../aggregators'

const fixPrice = text => [text].map(t => t.replace(/,/g, '.'))[0]

const mapStateToProps = ({ environments, products }, { match }) => ({
  products,
  environment: environments[match.params.id],
  categoryProducts: categoryProducts(products)
})

const mapDispatchToProps = (dispatch, { match }) => ({
  onToggleProduct: product => included =>
    included
      ? dispatch(removeEnvironmentProduct({ id: match.params.id, product }))
      : dispatch(
          setEnvironmentProduct({ id: match.params.id, product, price: '0.00' })
        ),
  onChangePrice: product => price =>
    /^(\d|\.)*$/.test(fixPrice(price)) &&
    dispatch(
      setEnvironmentProduct({
        id: match.params.id,
        product,
        price: fixPrice(price)
      })
    )
})

export default connect(mapStateToProps, mapDispatchToProps)(PricesEditor)
