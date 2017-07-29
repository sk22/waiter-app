import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import { injectGlobal } from 'styled-components'

import exampleState from './exampleState'
import reducer from './reducers'
import Scenarios from './Scenarios'
import Products from './Products'
import Orders from './Orders'

const store = createStore(
  reducer,
  exampleState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

// eslint-disable-next-line
injectGlobal`
  body {
    padding: 0;
    margin: 0;
  }
`

const App = () =>
  <Provider store={store}>
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Scenarios} />
        <Route path="/scenarios" component={Scenarios} />
        <Route path="/products" component={Products} />
        <Route path="/orders" component={Orders} />
        <Route path="/:scenario" component={Orders} />
      </Switch>
    </BrowserRouter>
  </Provider>

export default App
