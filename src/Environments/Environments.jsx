import React from 'react'
import { Switch, Route } from 'react-router-dom'

import EnvironmentList from './EnvironmentListContainer'
import EnvironmentAdder from './EnvironmentAdderContainer'
import EnvironmentEditor from './EnvironmentEditorContainer'
import PricesEditor from './PricesEditorContainer'

const Environments = () =>
  <Switch>
    <Route exact path="/" component={EnvironmentList} />
    <Route path="/environments/add" component={EnvironmentAdder} />
    <Route path="/environments/:id/prices" component={PricesEditor} />
    <Route path="/environments/:id" component={EnvironmentEditor} />
    <Route path="/environments" component={EnvironmentList} />
  </Switch>

export default Environments
