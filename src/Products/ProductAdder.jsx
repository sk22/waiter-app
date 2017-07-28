import React, { Component } from 'react'
import PropTypes from 'prop-types'
import IconButton from 'material-ui/IconButton'
import TextField from 'material-ui/TextField'
import Divider from 'material-ui/Divider'
import List, { ListItem, ListItemText, ListSubheader } from 'material-ui/List'
import SaveIcon from 'material-ui-icons/Save'

import Page from '../layouts/Page'
import Content from '../components/Content'
import Navigation from '../components/Navigation'
import BackIconButton from '../components/BackIconButton'

class ProductAdder extends Component {
  static propTypes = {
    onAdd: PropTypes.func,
    history: PropTypes.shape({
      goBack: PropTypes.func
    }),
    categories: PropTypes.arrayOf(PropTypes.string)
  }

  state = { name: '', category: '', categoryInput: null }

  render = () =>
    <Page>
      <Navigation
        iconButton={<BackIconButton goBack={this.props.history.goBack} />}
        title="Add Product"
      >
        <IconButton
          to="/products/add"
          onClick={() => this.props.onAdd(this.state)}
        >
          <SaveIcon />
        </IconButton>
      </Navigation>
      <Content>
        <TextField
          label="Name"
          onChange={event => this.setState({ name: event.target.value })}
          margin="normal"
          autoFocus
          fullWidth
        />
        <TextField
          label="Category"
          value={this.state.category}
          onChange={event => this.setState({ category: event.target.value })}
          inputRef={ref => this.setState({ categoryInput: ref })}
          margin="normal"
          fullWidth
        />
      </Content>
      <Divider />
      <List subheader={<ListSubheader>Categories</ListSubheader>}>
        {this.props.categories
          .filter(category => this.state.category !== category)
          .map(category =>
            <ListItem
              key={category}
              button
              onClick={() => {
                this.state.categoryInput.focus()
                this.setState({ category })
              }}
            >
              <ListItemText primary={category} />
            </ListItem>
          )}
      </List>
    </Page>
}

export default ProductAdder
