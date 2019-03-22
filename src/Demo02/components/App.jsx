import React from 'react';
import AddTodo from '../containers/Addtodo';
import VisibleTodoList from '../containers/VisibleTodoList';
import Footer from './Footer';


const App = () => (
	<div>
		<AddTodo />
		<VisibleTodoList />
		<Footer />
	</div>
)

export default App;