import React from 'react'
import { Switch, Route } from 'react-router-dom'

import ScenarioList from './ScenarioListContainer'
import ScenarioAdder from './ScenarioAdderContainer'
import ScenarioEditor from './ScenarioEditorContainer'
import PricesEditor from './PricesEditorContainer'

const Scenarios = () =>
  <Switch>
    <Route exact path="/" component={ScenarioList} />
    <Route path="/scenarios/add" component={ScenarioAdder} />
    <Route path="/scenarios/:id/prices" component={PricesEditor} />
    <Route path="/scenarios/:id" component={ScenarioEditor} />
    <Route path="/scenarios" component={ScenarioList} />
  </Switch>

export default Scenarios
