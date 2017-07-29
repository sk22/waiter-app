import React, { Component } from 'react'
import PropTypes from 'prop-types'
import TextField from 'material-ui/TextField'
import Divider from 'material-ui/Divider'
import List, { ListItem, ListItemText, ListSubheader } from 'material-ui/List'
import IconButton from 'material-ui/IconButton'
import SaveIcon from 'material-ui-icons/Save'
import DeleteIcon from 'material-ui-icons/Delete'

import { product as productPropType } from './productsPropTypes'
import Content from '../components/Content'
import Page from '../layouts/Page'
import ErrorPage from '../layouts/ErrorPage'
import Navigation from '../components/Navigation'
import BackIconButton from '../components/BackIconButton'

class ProductEditor extends Component {
  static propTypes = {
    title: PropTypes.string,
    history: PropTypes.shape({ goBack: PropTypes.func }).isRequired,
    product: productPropType,
    categories: PropTypes.arrayOf(PropTypes.string).isRequired,
    onAdd: PropTypes.func,
    onRemove: PropTypes.func,
    onChangeName: PropTypes.func.isRequired,
    onChangeCategory: PropTypes.func.isRequired
  }

  state = { categoryInputRef: null }

  onClickCategory = category => {
    this.state.categoryInputRef.focus()
    this.props.onChangeCategory(category)
  }

  render = () =>
    !this.props.product
      ? <ErrorPage error="Not Found" goBack={this.props.history.goBack} />
      : <Page>
          <Navigation
            iconButton={<BackIconButton goBack={this.props.history.goBack} />}
            title={this.props.title || 'Product'}
          >
            {this.props.onAdd &&
              <IconButton to="/products" onClick={this.props.onAdd}>
                <SaveIcon />
              </IconButton>}
            {this.props.onRemove &&
              <IconButton to="/products" onClick={this.props.onRemove}>
                <DeleteIcon />
              </IconButton>}
          </Navigation>
          <Content>
            <TextField
              label="Name"
              value={this.props.product.name || ''}
              onChange={event => this.props.onChangeName(event.target.value)}
              margin="normal"
              autoFocus
              fullWidth
            />
            <TextField
              label="Category"
              placeholder="Choose from below or enter new category"
              value={this.props.product.category || ''}
              onChange={event =>
                this.props.onChangeCategory(event.target.value)}
              inputRef={categoryInputRef => this.setState({ categoryInputRef })}
              margin="normal"
              fullWidth
            />
          </Content>
          <Divider />
          <List subheader={<ListSubheader>Categories</ListSubheader>}>
            {/* .filter(c => this.props.category !== c)  */}
            {this.props.categories.filter(Boolean).map(c =>
              <ListItem key={c} button onClick={() => this.onClickCategory(c)}>
                <ListItemText primary={c} />
              </ListItem>
            )}
          </List>
        </Page>
}

export default ProductEditor
