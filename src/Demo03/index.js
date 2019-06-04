import React from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import rootReducers from './reducers';

import App from './components/App';

const initStore = {}

const store = createStore(rootReducers, initStore)

const MiddleWareDemo = () => (
  <Provider store={store}> 
    <App />
  </Provider>
) 

export default MiddleWareDemo;