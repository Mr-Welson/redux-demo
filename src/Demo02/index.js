import React from 'react';
import TaskContainer from './containers/AddTask';

// 引入redux
import { createStore } from 'redux'; 
import { Provider } from 'react-redux';

// 引入reducer
import reducers from './reducers';

// 创建一个初始化state
const initState = {}

// 创建store
const store = createStore(reducers, initState)

// 注入store
const TodoListDemo = () => (
  <Provider store={store}>
    <TaskContainer />
    {/* <ListContainer />
    <FilterContainer /> */}
  </Provider>
)

export default TodoListDemo;