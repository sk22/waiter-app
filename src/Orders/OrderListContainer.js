import { connect } from 'react-redux'
import { generate } from 'shortid'

import { setOrderDelivered, addOrder } from './ordersActions'
import OrderList from './OrderList'

const mapStateToProps = ({ orders, scenarios }, { match }) => {
  const scenario = match.params.scenario
  const ordersForScenario = Object.keys(orders).filter(
    id => orders[id].scenario === match.params.scenario
  )
  return {
    name: scenario && scenarios[scenario] && scenarios[scenario].name,
    orders,
    delivered: ordersForScenario.filter(id => orders[id].delivered),
    pending: ordersForScenario.filter(id => !orders[id].delivered)
  }
}

const mapDispatchToProps = (dispatch, { match }) => ({
  onToggle: id => delivered => dispatch(setOrderDelivered({ id, delivered })),
  onAdd: () =>
    dispatch(addOrder({ id: generate(), scenario: match.params.scenario }))
})

export default connect(mapStateToProps, mapDispatchToProps)(OrderList)
