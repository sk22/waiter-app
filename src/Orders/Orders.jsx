import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import IconButton from 'material-ui/IconButton'
import AddIcon from 'material-ui-icons/Add'
import ArchiveIcon from 'material-ui-icons/Archive'
import UnarchiveIcon from 'material-ui-icons/Unarchive'
import List, {
  ListItem,
  ListItemText,
  ListItemSecondaryAction,
  ListSubheader
} from 'material-ui/List'

import Page from '../layouts/Page'
import BackIconButton from '../components/BackIconButton'
import Navigation from '../components/Navigation'
import { scenario as scenarioPropType } from '../Scenarios/scenariosPropTypes'

const Orders = ({ orders, history, name, match, onAdd, onToggle }) => {
  const notDelivered = Object.keys(orders).filter(id => !orders[id].delivered)
  const delivered = Object.keys(orders).filter(id => orders[id].delivered)

  return (
    <Page>
      <Navigation
        title={name || 'Orders'}
        iconButton={<BackIconButton goBack={history.goBack} />}
      >
        <IconButton onClick={onAdd}>
          <AddIcon />
        </IconButton>
      </Navigation>
      {notDelivered.length
        ? <List>
            {notDelivered.map(id =>
              <ListItem key={id} component={Link} to={`/orders/${id}`}>
                <ListItemText primary={`Order ${id}`} />
                <ListItemSecondaryAction>
                  <IconButton>
                    <ArchiveIcon
                      onClick={() => onToggle(id)(!orders[id].delivered)}
                    />
                  </IconButton>
                </ListItemSecondaryAction>
              </ListItem>
            )}
          </List>
        : <List>
            <ListItem>
              <ListItemText primary="All orders have been delivered" />
            </ListItem>
          </List>}

      <List subheader={<ListSubheader>Delivered</ListSubheader>}>
        {delivered.map(id =>
          <ListItem key={id} component={Link} to={`/orders/${id}`} dense>
            <ListItemText primary={`Order ${id}`} />
            <ListItemSecondaryAction>
              <IconButton>
                <UnarchiveIcon
                  onClick={() => onToggle(id)(!orders[id].delivered)}
                />
              </IconButton>
            </ListItemSecondaryAction>
          </ListItem>
        )}
      </List>
    </Page>
  )
}

Orders.propTypes = {
  orders: scenarioPropType,
  name: PropTypes.string,
  history: PropTypes.shape({
    goBack: PropTypes.func
  }),
  match: PropTypes.shape({ url: PropTypes.string }),
  onToggle: PropTypes.func,
  onAdd: PropTypes.func
}

export default Orders