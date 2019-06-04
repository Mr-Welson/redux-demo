# redux

> Redux是JavaScript状态容器，提供可预测化的状态管理

使用场景：

1. 处理共享状态

2. 深层嵌套的组件之间的通讯



## 工作流

```
=> 用户点击按钮
=> component 触发 container 的回调 
=> container dispatch 一个 action 并 触发reducer
=> reducer 更新 state
=> 页面响应
```



## 基本概念

### action

用来描述当前发生的事情的普通 js 对象,  ` type` 属性是必须的，其他属性可以自由设置。 action 并不会直接改变state，但改变 state 的唯一办法，就是使用 action, 它会运送数据到 store。

```
// action
const todo = {
  type: ADD_TODO,
  payload: 'text'
}
```

#### actionCreateor 

actionCreateor 就是用来生成 action 的一个函数

```
// actionCreateor 
const addTodo = (text) => {
  return {
      type: 'ADD_TODO',
      payload: 'text'
  }
}
```

### reducer

1. 形式为 `(state, action) => state`  的**纯函数**，用来修改state，根据 action 的 type 来处理不同的事件。

> 纯函数是函数式编程的概念，必须遵守以下一些约束：
>
> - 不能修改传入的参数
> - 不能 执行有副作用的操作，如 API 请求和路由跳转
> - 不能调用`Date.now()`或者`Math.random()`等不纯的方法，因为每次会得到不一样的结果

2. reducer 接收当前 state 和 action ，并返回新的 state，更新store

**注意：**当 state 变化时需要返回 全新 的对象 ，而不是修改传入的参数

```
// reducer
const todos = (state={}, action) => {
	switch(action.type){
		case 'ADD_TODO':
      return Object.assign({}, state, {
        payload: action.text
      })
		default:
			return state
	}
}
```

#### 拆分reducer





#### combineReducers





### store

store是 Redux 提供的唯一数据源，存储整个应用的state

Redux 提供了生成Store的方法：createStore(reducer, initState, applyMiddleware)

Redux 提供了获取某个时点state的方法：store.getState();









## react-redux 5部曲：

1. 引入 redux 库

   ```
   import { createStore } from 'redux';
   import { Provider } from 'react-redux';
   ```

2. 引入 reducer 文件

   ```
   import reducers from './reducers';
   ```

3. 创建一个初始化 state

   ```
   const initState = {}
   ```

4. 创建 store

   ```
   const store = createStore(reducers, initState)
   ```

5. 注入 store

   ```
   ReactDOM.render(
       <Provider store={store}>
         <App />
       </Provider>,
       document.getElementById('root')
   )
   ```





​    


