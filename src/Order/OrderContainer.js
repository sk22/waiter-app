import { connect } from 'react-redux'

import {
  setOrderScenario,
  setOrderDelivered,
  setOrderAttributes,
  setOrderProduct
} from '../Orders/ordersActions'
import Order from './Order'

const mapStateToProps = ({ scenarios, orders, products }, { match }) => {
  const id = match.params.id
  const order = orders[id]
  const scenario = order.scenario ? scenarios[order.scenario] : null
  const sum = scenario
    ? Object.keys(order.products).reduce((pre, key) => {
        const price = scenario.products[key]
        const quantity = order.products[key]
        return pre + price * quantity
      }, 0)
    : 0

  const filteredProducts = scenario
    ? Object.keys(products).filter(product =>
        Object.keys(scenario.products).includes(product)
      )
    : Object.keys(products)

  return {
    sum,
    order,
    scenarios,
    scenario,
    products: filteredProducts.reduce(
      (pre, key) => ({
        ...pre,
        [key]: {
          ...products[key],
          price: scenario ? scenario.products[key] : 0
        }
      }),
      {}
    )
  }
}

const mapDispatchToProps = (dispatch, { match: { params: { id } } }) => ({
  onChooseScenario: scenario => dispatch(setOrderScenario({ id, scenario })),
  onToggleDelivered: delivered =>
    dispatch(setOrderDelivered({ id, delivered })),
  onChangeNotes: notes =>
    dispatch(setOrderAttributes({ id, attributes: { notes } })),
  onChangeLocation: location =>
    dispatch(setOrderAttributes({ id, attributes: { location } })),
  onUpdateProductQuantity: product => quantity =>
    dispatch(setOrderProduct({ id, product, quantity: Number(quantity) }))
})

export default connect(mapStateToProps, mapDispatchToProps)(Order)
