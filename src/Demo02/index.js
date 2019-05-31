import React from 'react';
// 引入根组件
import App from './components/App';
import './index.scss';

// 引入redux相关库
import { createStore } from 'redux'; 
import { Provider } from 'react-redux';
// Provider是用来实现store的全局访问的，它的原理就是使用react的context
// 因此在组件内部获取 store 的时候,应该使用 this.context.store

// 引入reducer
import reducers from './reducers';

// 创建一个初始化state
const initState = {}

// 创建store
const store = createStore(reducers, initState);


// 注入store
const TodoListDemo = () => (
  <Provider store={store}>
    <App />
  </Provider>
)

export default TodoListDemo;