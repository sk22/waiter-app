import { connect } from 'react-redux'

import {
  setOrderScenario,
  setOrderDelivered,
  setOrderAttributes
} from '../Orders/ordersActions'
import Order from './Order'

const mapStateToProps = ({ scenarios, orders, products }, { match }) => {
  const id = match.params.id
  const scenario = scenarios[orders[id].scenario]
  return {
    order: orders[id],
    scenarios,
    products: Object.keys(products)
      .filter(product => Object.keys(scenario.products).includes(product))
      .reduce(
        (pre, key) => ({
          ...pre,
          [key]: { ...products[key], price: scenario.products[key] }
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
    dispatch(setOrderAttributes({ id, attributes: { location } }))
})

export default connect(mapStateToProps, mapDispatchToProps)(Order)
