import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import IconButton from 'material-ui/IconButton'
import AddIcon from 'material-ui-icons/Add'
import EditIcon from 'material-ui-icons/Edit'
import RestaurantMenuIcon from 'material-ui-icons/RestaurantMenu'
import List, {
  ListItem,
  ListItemText,
  ListItemSecondaryAction
} from 'material-ui/List'

import Page from '../layouts/Page'
import Navigation from '../components/Navigation'
import { scenario as scenarioPropType } from './scenariosPropTypes'

const Scenarios = ({ scenarios }) =>
  <Page>
    <Navigation title="Scenarios">
      <IconButton component={Link} to="/products">
        <RestaurantMenuIcon />
      </IconButton>
      <IconButton component={Link} to="/scenarios/add">
        <AddIcon />
      </IconButton>
    </Navigation>
    <List>
      {Object.keys(scenarios).map(id =>
        <ListItem key={id} button component={Link} to={`/${id}`}>
          <ListItemText primary={scenarios[id].name} />
          <ListItemSecondaryAction>
            <IconButton component={Link} to={`/scenarios/${id}`}>
              <EditIcon />
            </IconButton>
          </ListItemSecondaryAction>
        </ListItem>
      )}
    </List>
  </Page>

Scenarios.propTypes = {
  scenarios: PropTypes.objectOf(scenarioPropType)
}

export default Scenarios
