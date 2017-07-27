import { connect } from 'react-redux'

import { setOrderScenario, setOrderDelivered } from '../Orders/ordersActions'
import Order from './Order'

const mapStateToProps = ({ scenarios, orders, products }, { match }) => {
  const id = match.params.id
  return {
    order: orders[id],
    scenarios
  }
}

const mapDispatchToProps = (dispatch, { match }) => ({
  onChooseScenario: scenario =>
    dispatch(setOrderScenario({ id: match.params.id, scenario })),
  onToggleDelivered: delivered =>
    dispatch(setOrderDelivered({ id: match.params.id, delivered }))
})

export default connect(mapStateToProps, mapDispatchToProps)(Order)
