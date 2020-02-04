import React from 'react';
import ReactDOM from 'react-dom';

import App from './app';

import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reducers from './reducers';


let store = createStore(reducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

store.subscribe(() => console.log('SUBSCRIBED TO STORE'));

ReactDOM.render(<Provider store={store}><App/></Provider>, document.getElementById('root'));


