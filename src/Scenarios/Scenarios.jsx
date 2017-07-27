import React from 'react'
import PropTypes from 'prop-types'
import { Route, Link, Switch } from 'react-router-dom'
import IconButton from 'material-ui/IconButton'
import AddIcon from 'material-ui-icons/Add'
import List, { ListItem, ListItemText } from 'material-ui/List'

import ScenarioAdder from './ScenarioAdder'
import Page from '../layouts/Page'
import Navigation from '../components/Navigation'
import { scenario as scenarioPropType } from './scenariosPropTypes'

const Scenarios = ({ scenarios, onAdd }) =>
  <Switch>
    <Route
      path="/scenarios/add"
      render={props => <ScenarioAdder onAdd={onAdd} {...props} />}
    />
    <Page>
      <Navigation title="Scenarios">
        <IconButton component={Link} to="/scenarios/add">
          <AddIcon />
        </IconButton>
      </Navigation>
      <div>
        <List>
          {Object.keys(scenarios).map(id =>
            <ListItem key={id} button component={Link} to={`/${id}`}>
              <ListItemText primary={scenarios[id].name} />
            </ListItem>
          )}
        </List>
      </div>
    </Page>
  </Switch>

Scenarios.propTypes = {
  scenarios: PropTypes.objectOf(scenarioPropType),
  onAdd: PropTypes.func
}

export default Scenarios
