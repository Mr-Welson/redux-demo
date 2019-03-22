import React from 'react';
import AppContainer from "./AppContainer";

// 引入redux库
import { createStore } from 'redux';
import { Provider } from 'react-redux';

// 引入reducer
const reducer = (state, action) => {
  switch(action.type) {
    case 'ADD':
      return {
        ...state,
        number: state.number+1
      }
    case 'MINUS':
      return Object.assign({}, state, { number: state.number-1 })
    case 'RANDOM':
      return {
        ...state,
        number: parseInt(Math.random()*100)
      }
    default: return state
  }
}

// 创建一个初始化的state
const initState = {
  number: 0
}

// 创建store
const store = createStore(reducer, initState);

// 注入store
const SimpleDemoContainer = () => (
  <Provider store={store}>
    <AppContainer />
  </Provider>
)

export default SimpleDemoContainer;