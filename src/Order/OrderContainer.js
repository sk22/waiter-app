import { connect } from 'react-redux'

import { setOrderScenario } from '../Orders/ordersActions'
import Order from './Order'

const mapStateToProps = ({ scenarios, orders, products }, { match }) => {
  const id = match.params.id
  return {
    order: orders[id],
    scenarios
  }
}

const mapDispatchToProps = (dispatch, { match }) => ({
  onScenarioChoose: scenario =>
    dispatch(setOrderScenario({ id: match.params.id, scenario }))
})

export default connect(mapStateToProps, mapDispatchToProps)(Order)
