import React, { Component } from 'react'
import PropTypes from 'prop-types'
import TextField from 'material-ui/TextField'
import Checkbox from 'material-ui/Checkbox'
import List, { ListItem, ListItemText } from 'material-ui/List'
import Menu, { MenuItem } from 'material-ui/Menu'
import Divider from 'material-ui/Divider'
import Typography from 'material-ui/Typography'

import { order as orderPropType } from '../Orders/ordersPropTypes'
import { scenario as scenarioPropType } from '../Scenarios/scenariosPropTypes'
import Page from '../layouts/Page'
import Navigation from '../components/Navigation'
import Content from '../components/Content'
import BackIconButton from '../components/BackIconButton'
import NumberPicker from '../components/NumberPicker'
import AutoSize from '../components/AutoSize'

const AutoSizeCheckbox = AutoSize(Checkbox)

class OrderEditor extends Component {
  static propTypes = {
    order: orderPropType,
    scenario: scenarioPropType,
    scenarios: PropTypes.objectOf(scenarioPropType),
    products: PropTypes.shape({
      name: PropTypes.string,
      category: PropTypes.string
    }),
    attributes: PropTypes.object,
    delivered: PropTypes.bool,
    sum: PropTypes.number,
    history: PropTypes.shape({ goBack: PropTypes.func }),
    onChooseScenario: PropTypes.func,
    onToggleDelivered: PropTypes.func,
    onChangeLocation: PropTypes.func,
    onChangeNotes: PropTypes.func,
    onUpdateProductQuantity: PropTypes.func
  }

  state = {
    anchorEl: null,
    scenarioMenuOpen: false
  }

  handleClickListItem = event => {
    this.setState({ anchorEl: event.target, scenarioMenuOpen: true })
  }

  handleRequestClose = () => this.setState({ scenarioMenuOpen: false })

  onMenuItemClick = id => event => {
    this.setState({ scenarioMenuOpen: false })
    this.props.onChooseScenario(id)
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
            secondary={this.props.scenario ? this.props.scenario.name : 'None'}
          />
        </ListItem>
        <ListItem
          button
          onClick={event =>
            this.props.onToggleDelivered(!this.props.order.delivered)}
        >
          <ListItemText primary="Delivered" />
          <AutoSizeCheckbox
            checked={this.props.order.delivered}
            disableRipple
          />
        </ListItem>
      </List>
      <Menu
        anchorEl={this.state.anchorEl}
        open={this.state.scenarioMenuOpen}
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
        <TextField
          label="Location"
          margin="normal"
          fullWidth
          value={this.props.order.attributes.location || ''}
          onChange={event => this.props.onChangeLocation(event.target.value)}
        />
        <TextField
          placeholder="Notes"
          margin="normal"
          multiline
          fullWidth
          value={this.props.order.attributes.notes || ''}
          onChange={event => this.props.onChangeNotes(event.target.value)}
        />
      </Content>
      <Divider />
      <List>
        {Object.keys(this.props.products).map(id => {
          const product = this.props.products[id]
          const quantity = this.props.order.products[id] || 0
          return (
            <ListItem key={id} divider>
              <ListItemText
                primary={product.name}
                secondary={
                  product.price.toFixed(2) +
                  (quantity
                    ? ` × ${quantity} = ` +
                      (product.price * quantity).toFixed(2)
                    : '')
                }
              />
              <NumberPicker
                value={Number(quantity)}
                onChange={this.props.onUpdateProductQuantity(id)}
              />
            </ListItem>
          )
        })}
        <Divider />
        <ListItem>
          <ListItemText primary="Sum" />
          <Typography type="subheading">
            {this.props.sum.toFixed(2)}
          </Typography>
        </ListItem>
      </List>
    </Page>
}

export default OrderEditor
