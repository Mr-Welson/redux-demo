import { combineReducers } from 'redux';
import todos from './todo';
import visibilityFilter from './visibilityFilter';

// 使用 combineReducers 合并多个reducer
/**
 combineReducers 有以下特性: 
  1. 在 dispatch 一个 action 时, combineReducers 会调用所有传入的 reducer
  2. 多个子 reducer 可以响应同一个 action
  3. 你可以在任何级别的 reducer 中使用 combineReducer，不仅仅是在创建根 reducer 的时候。
 每个传入 combineReducers 的子 reducer 都需满足以下规则: 
  1. 所有未匹配到的 action (也就是 default 项)，必须把它接收到的第一个参数也就是那个 state 原封不动返回
  2. 永远不能返回 undefined
  3. 子 reducer 接受的第一个参数并不是完整的 state , 只是他负责管理的切片 state
 */
const todoApp = combineReducers({
	todos,
	visibilityFilter
})

// 一个简易的 combineReducers 实现 : 
// function combineReducersDemo(state, action) {
//   return {
//     todos: todos(state.todos, action),
//     visibilityFilter: visibilityFilter(state.visibilityFilter, action)
//   }
// }

export default todoApp;