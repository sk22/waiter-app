import React from 'react'
import { Switch, Route } from 'react-router-dom'

import OrderList from './OrderListContainer'
import OrderEditor from './OrderEditorContainer'

const Orders = () =>
  <Switch>
    <Route path="/orders" component={OrderList} />
    <Route path="/:scenario" component={OrderList} />
    <Route path="/orders/:id" component={OrderEditor} />
  </Switch>

export default Orders
