import React from "react"
import { render } from "react-dom"
import Home from "../pages/containers/home"
import data from '../schemas'
import  { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import reducer from '../reducers'
import logger from 'redux-logger'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'
import { Map as map } from 'immutable'

const store = createStore(
  reducer,
  map(),
  composeWithDevTools(applyMiddleware(logger, thunk))
);

const homeContainer = document.getElementById("home-container");

render(
  <Provider store={store}>
    <Home />
  </Provider>,
  homeContainer
);
