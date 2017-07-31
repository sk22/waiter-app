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
import Typography from 'material-ui/Typography'

import Page from '../layouts/Page'
import Content from '../components/Content'
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
    {!Object.keys(environments).length
      ? <Content>
          <Typography gutterBottom>
            Environments help you structure your orders. One environment for
            each event, restaurant, etc.
          </Typography>
          <Typography>
            No environments there yet. Go create one!{' '}
            <span role="img" aria-labelledby="smiling face">
              😄
            </span>
          </Typography>
        </Content>
      : <List>
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
        </List>}
  </Page>

Environments.propTypes = {
  environments: PropTypes.objectOf(environmentPropType)
}

export default Environments
