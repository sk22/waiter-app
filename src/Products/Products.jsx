import React from 'react'
import { Switch, Route } from 'react-router-dom'

import ProductList from './ProductListContainer'
import ProductAdder from './ProductAdderContainer'
import ProductEditor from './ProductEditorContainer'

const Products =  () =>
  <Switch>
    <Route exact path="/products" component={ProductList} />
    <Route path="/products/add" component={ProductAdder} />
    <Route path="/products/:id" component={ProductEditor} />
  </Switch>

export default Products
