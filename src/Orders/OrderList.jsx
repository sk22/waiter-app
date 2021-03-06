import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import IconButton from 'material-ui/IconButton'
import Divider from 'material-ui/Divider'
import AddIcon from 'material-ui-icons/Add'
import MoneyIcon from 'material-ui-icons/AttachMoney'
import DoneIcon from 'material-ui-icons/Done'

import List, {
  ListItem,
  ListItemText,
  ListItemSecondaryAction,
  ListSubheader
} from 'material-ui/List'

import Page from '../layouts/Page'
import ErrorPage from '../layouts/ErrorPage'
import BackIconButton from '../components/BackIconButton'
import Navigation from '../components/Navigation'
import { order as orderPropType } from './ordersPropTypes'

const OrderList = ({
  orders,
  pending,
  delivered,
  history,
  name,
  match,
  onAdd,
  onToggle
}) =>
  !name
    ? <ErrorPage error="Not Found" goBack={history.goBack} />
    : <Page>
        <Navigation
          title={name || 'Orders'}
          iconButton={<BackIconButton goBack={history.goBack} />}
        >
          {match.params.environment &&
            <IconButton
              component={Link}
              to={`/environments/${match.params.environment}/prices`}
            >
              <MoneyIcon />
            </IconButton>}
          <IconButton onClick={onAdd}>
            <AddIcon />
          </IconButton>
        </Navigation>
        {pending.length
          ? <List>
              {pending.map(id => {
                const order = orders[id]
                const location = order.attributes.location
                return (
                  <ListItem
                    key={id}
                    component={Link}
                    to={`/${match.params.environment || 'orders'}/${id}`}
                  >
                    <ListItemText
                      primary={
                        `Order ${id}` + (location ? ` at ${location}` : '')
                      }
                    />
                    <ListItemSecondaryAction>
                      <IconButton>
                        <DoneIcon
                          onClick={() => onToggle(id)(!orders[id].delivered)}
                        />
                      </IconButton>
                    </ListItemSecondaryAction>
                  </ListItem>
                )
              })}
            </List>
          : <List>
              <ListItem>
                <ListItemText
                  primary={
                    Object.keys(orders).length
                      ? 'All orders have been delivered'
                      : 'No orders there yet'
                  }
                />
              </ListItem>
            </List>}

        {Boolean(delivered.length) && <Divider />}
        {Boolean(delivered.length) &&
          <List subheader={<ListSubheader>Delivered</ListSubheader>}>
            {delivered.map(id =>
              <ListItem key={id} component={Link} to={`/orders/${id}`} dense>
                <ListItemText primary={`Order ${id}`} />
              </ListItem>
            )}
          </List>}
      </Page>

OrderList.propTypes = {
  orders: PropTypes.objectOf(orderPropType),
  delivered: PropTypes.arrayOf(PropTypes.string),
  pending: PropTypes.arrayOf(PropTypes.string),
  name: PropTypes.string,
  history: PropTypes.shape({
    goBack: PropTypes.func
  }),
  match: PropTypes.shape({ url: PropTypes.string }),
  onToggle: PropTypes.func,
  onAdd: PropTypes.func
}

export default OrderList
