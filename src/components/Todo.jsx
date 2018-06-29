import React from 'react';

const Todo = ({onClick, complete, text}) => {
	return (
		<li
			style={{
				textDecoration: complete ? 'line-through' : 'none'
			}}
			onClick={onClick}
		>
			{text}
		</li>
	)
}

export default Todo;