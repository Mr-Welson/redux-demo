import React from 'react';
import ReactDOM from 'react-dom';
import { combineReducers,createStore } from 'redux';
import { Provider, connect } from 'react-redux';
import './index.scss';

// Redux
// 1. Web 应用是一个状态机，视图与状态是一一对应的。
// 2. 所有的状态，保存在一个对象里面。
// 处理共享状态
// 深层嵌套的组件之间的通讯

// Redux工作流
// 只有一个单一的 store 和一个根级的 reduce 函数

// => 按钮点击 
// => component触发container的回调 
// => container dispatch一个action
// => action 触发 reducer
// => reducer 更新 state

/**
 * constants
 * 常量
 */
const ActionTypes = {
  ADD_TODO: 'ADD_TODO'
}

/**
 * action
 * 作用于store
 * 改变内部 state 唯一方法是 dispatch 一个 action。
 * 创建函数及常量，描述发生了什么
 */
// actionCreators
const addTodo = (text) => {
  console.log('--- action ---')
  return {
      type: ActionTypes.ADD_TODO,
      text
  }
}

/**
 * reducer
 * 形式为 (state, action) => state 的纯函数，决定每个 action 如何改变应用的 state
 * 接收旧的state和action，返回新的state，更新store
 * 当 state 变化时需要返回 全新的对象 ，而不是修改传入的参数
 */
const todos = (state, action) => {
  console.log('--- reducer ---')
	switch(action.type){
		case ActionTypes.ADD_TODO:
      return Object.assign({}, state, {
        text: action.text
      })
		default:
			return state === undefined ? {} : state
	}
}
// 我们可以把 Reducer 函数拆分。不同的函数负责处理不同属性，
// 最终使用 combineReducers 合并多个reducer
const todoApp = combineReducers({todos})

/**
 * 展示组件 components
 * 获取数据：从props获取
 * 修改数据：从props调用回调函数
 */
const AddTodoView = ({onSubmit, text}) => {
  console.log('--- component ---')
  let input;
  return (
  <div>
      <form onSubmit={e => {
          e.preventDefault();
          onSubmit(input.value)
          input.value = ''
      }}>
          <input type="text" ref={node => input = node}/>
          <button type='htmlSubmit'>add todo</button>
          <span>{text}</span>
      </form>
      <div className='wrapper'>
        <div className='content'>111</div>
        <div className='content'>222</div>
      </div> 
  </div>
  )
}

/**
 * 容器组件 containers
 * 获取数据: 从store中获取state
 * 修改数据: 向Redux派发action，触发更新
 */
// state: store中的state
const mapStateToProps = (state, ownProps) => {
  console.log('--- container mapStateToProps ---')  
	return {
		text: state.todos.text
	}
}
const mapDispatchToProps = (dispatch, ownProps) => {
  console.log('--- container mapDispatchToProps ---')    
	return {
		onSubmit(text){
      // 2种方式 dispatch 一个 action:
      // 1. 内联action
      dispatch({
        type: ActionTypes.ADD_TODO,
        text
      })
      // 2. 使用 actionCreator
      // dispatch(addTodo(text))
		}
	}
}
// 
const AddTodoContainer = connect(
  mapStateToProps,
	mapDispatchToProps
)(AddTodoView)


/**
 * store
 * 每个应用只有一个单一的 store
 * 接收2个参数
 * params1：reducer
 * params2：初始state
 */
let store = createStore(todoApp, {
  todos:{
    text: 'initText'
  } 
})


/**
 * index.js 
 * 项目入口文件
 * 注入store，渲染根组件
 */
function render() {
  ReactDOM.render(
    <Provider store={store}>
      <AddTodoContainer />
    </Provider>,
    document.getElementById('root')
  )
}

render()

if (module.hot) {
  module.hot.accept(() => render())
}


