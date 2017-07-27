import { connect } from 'react-redux'

import {
  setOrderScenario,
  setOrderDelivered,
  setOrderAttributes
} from '../Orders/ordersActions'
import Order from './Order'

const mapStateToProps = ({ scenarios, orders, products }, { match }) => {
  const id = match.params.id
  return {
    order: orders[id],
    scenarios
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
