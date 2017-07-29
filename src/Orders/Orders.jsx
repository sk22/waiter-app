import React from 'react'
import { Switch, Route } from 'react-router-dom'

import OrderList from './OrderListContainer'
import OrderEditor from './OrderEditorContainer'

const Orders = () =>
  <Switch>
    <Route exact path="/orders" component={OrderList} />
    <Route path="/:scenario/:id" component={OrderEditor} />
    <Route path="/:scenario" component={OrderList} />
  </Switch>

export default Orders
