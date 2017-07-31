import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import { injectGlobal } from 'styled-components'

// import exampleState from './exampleState'
import { loadState, saveState } from './localStorage'
import reducer from './reducers'
import Environments from './Environments'
import Products from './Products'
import Orders from './Orders'


const store = createStore(
  reducer,
  loadState(),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

store.subscribe(() => saveState(store.getState()))

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
        <Route exact path="/" component={Environments} />
        <Route path="/environments" component={Environments} />
        <Route path="/products" component={Products} />
        <Route path="/orders" component={Orders} />
        <Route path="/:environment" component={Orders} />
      </Switch>
    </BrowserRouter>
  </Provider>

export default App
