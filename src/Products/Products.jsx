import React from 'react'
import PropTypes from 'prop-types'
import { Route, Link, Switch } from 'react-router-dom'
import IconButton from 'material-ui/IconButton'
import AddIcon from 'material-ui-icons/Add'
import List, { ListItem, ListItemText, ListSubheader } from 'material-ui/List'
import Divider from 'material-ui/Divider'

import ProductAdderContainer from './ProductAdderContainer'
import ProductEditorContainer from './ProductEditorContainer'
import ErrorPage from '../layouts/ErrorPage'
import Page from '../layouts/Page'
import Navigation from '../components/Navigation'
import BackIconButton from '../components/BackIconButton'
import { product as productPropType } from './productsPropTypes'

const Products = ({
  products,
  productsByCategory,
  onAdd,
  onRemove,
  history
}) => {
  const ConditionalProductEditor = props =>
    !products[props.match.params.id]
      ? <ErrorPage error="Not Found" goBack={history.goBack} />
      : <ProductEditorContainer
          categories={Object.keys(productsByCategory)}
          onRemove={onRemove}
          {...props}
        />

  ConditionalProductEditor.propTypes = {
    match: PropTypes.shape({
      params: PropTypes.shape({ id: PropTypes.string })
    })
  }

  return (
    <Switch>
      <Route
        path="/products/add"
        render={props =>
          <ProductAdderContainer
            categories={Object.keys(productsByCategory)}
            onAdd={onAdd}
            {...props}
          />}
      />
      <Route path="/products/:id" component={ConditionalProductEditor} />
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
    </Switch>
  )
}

Products.propTypes = {
  history: PropTypes.shape({ goBack: PropTypes.func }).isRequired,
  products: PropTypes.objectOf(productPropType),
  productsByCategory: PropTypes.objectOf(PropTypes.arrayOf(PropTypes.string)),
  onAdd: PropTypes.func.isRequired,
  onRemove: PropTypes.func.isRequired
}

export default Products
