import React from 'react';
import { Provider } from 'react-redux';
import { createStore, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import reducers from 'reducers';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// Default initialState to empty object, in case this prop is undefined
export default ({ children, initialState = {} }) => {
  return (
    <Provider store={createStore(
      reducers,
      initialState,
      composeEnhancers(applyMiddleware(thunk))
    )}>
      {children}
    </Provider>
  )
};