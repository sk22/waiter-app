import { connect } from 'react-redux'
import { generate } from 'shortid'

import { setOrderDelivered, addOrder } from './ordersActions'
import OrderList from './OrderList'

const mapStateToProps = ({ orders, environments }, { match }) => {
  const environment = match.params.environment
  if (!environments[environment]) return { name: false }
  const ordersForEnvironment = Object.keys(orders).filter(
    id => orders[id].environment === match.params.environment
  )
  return {
    name: environments[environment].name,
    orders: ordersForEnvironment.reduce((pre, id) => ({
      ...pre,
      [id]: orders[id]
    }), {}),
    delivered: ordersForEnvironment.filter(id => orders[id].delivered),
    pending: ordersForEnvironment.filter(id => !orders[id].delivered)
  }
}

const mapDispatchToProps = (dispatch, { match }) => ({
  onToggle: id => delivered => dispatch(setOrderDelivered({ id, delivered })),
  onAdd: () =>
    dispatch(
      addOrder({ id: generate(), environment: match.params.environment })
    )
})

export default connect(mapStateToProps, mapDispatchToProps)(OrderList)
