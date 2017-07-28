import React from 'react'
import PropTypes from 'prop-types'
import { Route, Link, Switch } from 'react-router-dom'
import IconButton from 'material-ui/IconButton'
import AddIcon from 'material-ui-icons/Add'
import List, { ListItem, ListItemText, ListSubheader } from 'material-ui/List'

import ProductAdder from './ProductAdder'
import Page from '../layouts/Page'
import Navigation from '../components/Navigation'
import BackIconButton from '../components/BackIconButton'
import { product as productPropType } from './productsPropTypes'

const Products = ({ products, productsByCategory, onAdd, history }) =>
  <Switch>
    <Route
      path="/products/add"
      render={props => <ProductAdder onAdd={onAdd} {...props} />}
    />
    <Page>
      <Navigation
        iconButton={<BackIconButton goBack={history.goBack} />}
        title="Products"
      >
        <IconButton component={Link} to="/products/add">
          <AddIcon />
        </IconButton>
      </Navigation>
      <div>
        {Object.keys(productsByCategory).map(category =>
          <List
            subheader={
              <ListSubheader>
                {category}
              </ListSubheader>
            }
          >
            {productsByCategory[category].map(id =>
              <ListItem key={id} button component={Link} to={`/products/${id}`}>
                <ListItemText primary={products[id].name} />
              </ListItem>
            )}
          </List>
        )}
      </div>
    </Page>
  </Switch>

Products.propTypes = {
  products: PropTypes.objectOf(productPropType),
  productsByCategory: PropTypes.objectOf(PropTypes.arrayOf(PropTypes.string)),
  onAdd: PropTypes.func
}

export default Products
