import { connect } from 'react-redux'
import { generate } from 'shortid'

import { setOrderDelivered, addOrder } from './ordersActions'
import Orders from './Orders'
import { objectExcludingFilter } from '../utils'

const mapStateToProps = ({ orders, scenarios }, { match }) => {
  const scenario = match.params.scenario
  return {
    name: scenario && scenarios[scenario].name,
    orders: scenario
      ? objectExcludingFilter(orders)(order => order.scenario === scenario)
      : orders
  }
}

const mapDispatchToProps = (dispatch, { match }) => ({
  onToggle: id => delivered =>
    dispatch(setOrderDelivered({ id, delivered })),
  onAdd: () =>
    dispatch(addOrder({ id: generate(), scenario: match.params.scenario }))
})

export default connect(mapStateToProps, mapDispatchToProps)(Orders)
