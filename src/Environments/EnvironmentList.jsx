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
import { environment as environmentPropType } from './environmentsPropTypes'

const Environments = ({ environments }) =>
  <Page>
    <Navigation title="Environments">
      <IconButton component={Link} to="/products">
        <RestaurantMenuIcon />
      </IconButton>
      <IconButton component={Link} to="/environments/add">
        <AddIcon />
      </IconButton>
    </Navigation>
    <List>
      {Object.keys(environments).map(id =>
        <ListItem key={id} button component={Link} to={`/${id}`}>
          <ListItemText primary={environments[id].name} />
          <ListItemSecondaryAction>
            <IconButton component={Link} to={`/environments/${id}`}>
              <EditIcon />
            </IconButton>
          </ListItemSecondaryAction>
        </ListItem>
      )}
    </List>
  </Page>

Environments.propTypes = {
  environments: PropTypes.objectOf(environmentPropType)
}

export default Environments
