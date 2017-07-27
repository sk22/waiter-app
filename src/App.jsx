import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import { injectGlobal } from 'styled-components'

import reducer from './reducers'
import Scenarios from './Scenarios'
// import Orders from './Orders'
// import Products from './Products'

const store = createStore(
  reducer,
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
      </Switch>
    </BrowserRouter>
  </Provider>

export default App
