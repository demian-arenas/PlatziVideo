import React from "react"
import { render } from "react-dom"
import Home from "../pages/containers/home"
import data from '../schemas'
import  { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import reducer from '../reducers'
import { Map as map } from 'immutable'

const logger = ({ getState, dispatch}) => next => action => {
  console.log("estado anterior:", getState().toJS());
  console.log("enviando acción:", action);
  const value = next(action);
  console.log("nuevo estado   :", getState().toJS());
  return value;
}

const store = createStore(
  reducer,
  map(),
  applyMiddleware(logger)
  // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

const homeContainer = document.getElementById("home-container");

render(
  <Provider store={store}>
    <Home />
  </Provider>,
  homeContainer
);
