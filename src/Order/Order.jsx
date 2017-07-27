import React, { Component } from 'react'
import PropTypes from 'prop-types'
import TextField from 'material-ui/TextField'
import List, { ListItem, ListItemText } from 'material-ui/List'
import Menu, { MenuItem } from 'material-ui/Menu'
import Divider from 'material-ui/Divider'

import { order as orderPropType } from '../Orders/ordersPropTypes'
import { scenario as scenarioPropType } from '../Scenarios/scenariosPropTypes'
import Page from '../layouts/Page'
import Navigation from '../components/Navigation'
import Content from '../components/Content'
import BackIconButton from '../components/BackIconButton'
import Form from '../components/Form'

class Order extends Component {
  static propTypes = {
    order: orderPropType,
    scenarios: PropTypes.objectOf(scenarioPropType),
    prices: PropTypes.objectOf(PropTypes.number),
    quantities: PropTypes.objectOf(PropTypes.number),
    attributes: PropTypes.object,
    delivered: PropTypes.bool,
    history: PropTypes.shape({ goBack: PropTypes.func }),
    onScenarioChoose: PropTypes.func
  }

  state = {
    anchorEl: null,
    menuOpen: false
  }

  handleClickListItem = event => {
    this.setState({ anchorEl: event.target, menuOpen: true })
  }

  handleRequestClose = () => this.setState({ menuOpen: false })

  onMenuItemClick = id => event => {
    this.setState({ menuOpen: false })
    this.props.onScenarioChoose(id)
  }

  render = () =>
    <Page>
      <Navigation
        title="Order"
        iconButton={<BackIconButton goBack={this.props.history.goBack} />}
      />
      <List>
        <ListItem
          button
          aria-haspopup="true"
          onClick={this.handleClickListItem}
        >
          <ListItemText
            primary="Scenario"
            secondary={this.props.scenarios[this.props.order.scenario].name}
          />
        </ListItem>
      </List>
      <Menu
        anchorEl={this.state.anchorEl}
        open={this.state.menuOpen}
        onRequestClose={this.handleRequestClose}
      >
        {Object.keys(this.props.scenarios).map(id =>
          <MenuItem
            key={id}
            selected={id === this.props.order.scenario}
            onClick={this.onMenuItemClick(id)}
          >
            {this.props.scenarios[id].name}
          </MenuItem>
        )}
      </Menu>
      <Divider />
      <Content>
        <Form>
          <TextField
            label="Location"
            placeholder="Table number, ..."
            fullWidth
          />
        </Form>
      </Content>
    </Page>
}

export default Order
