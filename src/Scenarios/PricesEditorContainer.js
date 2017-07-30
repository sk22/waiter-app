import { connect } from 'react-redux'
import PricesEditor from './PricesEditor'
import { setScenarioProduct, removeScenarioProduct } from './scenariosActions'
import { categoryProducts } from '../aggregators'

const fixPrice = text => [text].map(t => t.replace(/,/g, '.'))[0]

const mapStateToProps = ({ scenarios, products }, { match }) => ({
  products,
  scenario: scenarios[match.params.id],
  categoryProducts: categoryProducts(products)
})

const mapDispatchToProps = (dispatch, { match }) => ({
  onToggleProduct: product => included =>
    included
      ? dispatch(removeScenarioProduct({ id: match.params.id, product }))
      : dispatch(
          setScenarioProduct({ id: match.params.id, product, price: '0.00' })
        ),
  onChangePrice: product => price =>
    dispatch(
      setScenarioProduct({
        id: match.params.id,
        product,
        price: fixPrice(price)
      })
    )
})

export default connect(mapStateToProps, mapDispatchToProps)(PricesEditor)
