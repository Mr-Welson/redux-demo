import React from 'react';
import AddTodo from '../containers/AddTodo';
import VisibleTodoList from '../containers/VisibleTodoList';
import Footer from './Footer';


const App = () => (
	<div className='todo-list-app'>
    <h2> 同步 TodoList </h2>
		<AddTodo />
		<VisibleTodoList />
		<Footer />
	</div>
)

export default App;