import React from 'react';
import ReactDOM from 'react-dom';

import App from './app';

import { createStore } from 'redux';
import { Provider } from 'react-redux';

import reducers from './reducers';
import {loadState, saveState} from './localStorage'

const persistedState = loadState();
const store = createStore(
  reducers,
  persistedState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );

store.subscribe(() => {
  saveState(store.getState())
});

ReactDOM.render(<Provider store={store}><App/></Provider>, document.getElementById('root'));


