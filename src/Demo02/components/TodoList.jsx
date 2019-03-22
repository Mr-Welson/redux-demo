import React from 'react';
import Todo from './Todo';

const TodoList = ({todos, onTodoClick}) => {
	return (
		<ul>
			{
				todos.map(v => (
					<Todo 
						key={v.id}
						{...v}
						onClick={() => onTodoClick(v.id)}
					/>
				))
			}
		</ul>
	)
}

export default TodoList; 