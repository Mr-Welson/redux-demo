# redux-demo
## redux5部曲：

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

    

