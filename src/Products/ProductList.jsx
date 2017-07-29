import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import IconButton from 'material-ui/IconButton'
import AddIcon from 'material-ui-icons/Add'
import List, { ListItem, ListItemText, ListSubheader } from 'material-ui/List'
import Divider from 'material-ui/Divider'

import Page from '../layouts/Page'
import Navigation from '../components/Navigation'
import BackIconButton from '../components/BackIconButton'
import { product as productPropType } from './productsPropTypes'

const ProductList = ({ products, productsByCategory, history }) =>
  <Page>
    <Navigation
      iconButton={<BackIconButton goBack={history.goBack} />}
      title="Products"
    >
      <IconButton component={Link} to="/products/add">
        <AddIcon />
      </IconButton>
    </Navigation>
    {Object.keys(productsByCategory).map(category =>
      <List
        key={category}
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
        <Divider />
      </List>
    )}
  </Page>

ProductList.propTypes = {
  history: PropTypes.shape({ goBack: PropTypes.func }).isRequired,
  products: PropTypes.objectOf(productPropType),
  productsByCategory: PropTypes.objectOf(PropTypes.arrayOf(PropTypes.string))
}

export default ProductList
