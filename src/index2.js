import React from 'react';
import ReactDOM from 'react-dom';
import { Provider as StoreProvider } from 'react-redux';
import { createStore } from 'redux';
import App from './components/App';
import todoApp from './reducers';

// 在react中数据是单向流动的

/**
 * store
 * store是 Redux 提供的唯一数据源，存储整个应用的state，状态树
 * Redux 提供了生成Store的方法：createStore(reducer, initState, applyMiddleware);
 * Redux 提供了获取某个时点state的方法：store.getState();
 * 
 * action
 * action用来描述当前发生的事情的普通对象, 并不直接修改state;
 * {
 *  type: 'ACTION_TYPE',
 *  payload: '',
 * }
 * 
 * reducer
 *
 * reducer就是专门用来修改state的纯函数;根据action的type来处理不同的事件
 * 它接收state和action，并返回新的state;
 * 
 * 
 */

// 某一时刻的state
// store.getState()
// {
//   card: {
//     name: 'Jack',
//     picture: 'a.jpg'
//   },
//   dialog: {
//     status: false
//   }
// }


// reducer
function reducer(state, action) {
  switch (action.type) {
    case 'ADD_NUM':
    return {
      card: {
        name: action.name, // 使用action携带的新name
        picture: state.card.picture // 不需要修改，使用旧state的值
      },
      dialog: state.dialog // 不需要修改，使用旧state的值
    }
    case 'SHOW_DIALOG':
    return {
      card: state.card, // 不需要修改，使用旧state的值
      dialog: {
        status: true
      }
    }
    case 'CLOSE_DIALOG':
    return {
      card: state.card, // 不需要修改，使用旧state的值
      dialog: {
        status: false
      }
    }
    default:
    return state // 没有匹配的action type，返回原来的state
  }
}

// 为什么不直接拿state，然后修改它state.card.name = action.name，最后return state不就好了吗
// 这是一个不好的实践，因为state是一个对象，直接修改state是会对其他引用了state的地方产生影响的，这种影响我们称为 副作用 ，而redux规定reducer必须是 纯函数 ，纯函数是没有副作用的。
// reducer 一定要保持纯净，只要传入参数相同，返回计算得到的下一个 state 就一定相同。没有特殊情况、没有副作用，没有 API 请求、没有变量修改，单纯执行计算。 ——redux官方文档


let store = createStore(todoApp);

function render() {
  ReactDOM.render(
    <StoreProvider store={store}>
      <App />
    </StoreProvider>,
    document.getElementById('root')
  )
}

render()

if (module.hot) {
  module.hot.accept(() => render())
}
