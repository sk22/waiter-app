import { connect } from 'react-redux'

import {
  setOrderEnvironment,
  setOrderDelivered,
  setOrderAttributes,
  setOrderProduct
} from '../Orders/ordersActions'
import OrderEditor from './OrderEditor'

const mapStateToProps = ({ environments, orders, products }, { match }) => {
  const id = match.params.id
  const order = orders[id]
  const environment = order.environment && environments[order.environment]

  const sum = environment
    ? Object.keys(order.products).reduce((pre, key) => {
        const price = Number(environment.products[key])
        const quantity = order.products[key]
        return pre + price * quantity
      }, 0)
    : 0

  const filteredProducts = environment
    ? Object.keys(products).filter(product =>
        Object.keys(environment.products).includes(product)
      )
    : Object.keys(products)

  return {
    sum,
    order,
    environments,
    environment,
    products: filteredProducts.reduce(
      (pre, key) => ({
        ...pre,
        [key]: {
          ...products[key],
          price: environment ? environment.products[key] : 0
        }
      }),
      {}
    )
  }
}

const mapDispatchToProps = (dispatch, { match: { params: { id } } }) => ({
  onChooseEnvironment: environment => dispatch(setOrderEnvironment({ id, environment })),
  onToggleDelivered: delivered =>
    dispatch(setOrderDelivered({ id, delivered })),
  onChangeNotes: notes =>
    dispatch(setOrderAttributes({ id, attributes: { notes } })),
  onChangeLocation: location =>
    dispatch(setOrderAttributes({ id, attributes: { location } })),
  onChangeProductQuantity: product => quantity =>
    dispatch(setOrderProduct({ id, product, quantity }))
})

export default connect(mapStateToProps, mapDispatchToProps)(OrderEditor)
