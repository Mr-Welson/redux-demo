const todo = (state, action) => {
	switch (action.type) {
		case 'ADD_TODO':
			return {
				id: action.id,
				text: action.text,
				complete: false
			}
		case 'TOGGLE_TODO':
			if(state.id !== action.id){
				return state
			}
			return Object.assign({}, state, {
				complete: !state.complete
			})
		default: 
			return state
	}
}

const todos = (state, action) => {
	switch(action.type){
		case 'ADD_TODO':
			return [
				...state,
				todo(undefined, action)
			]
		case 'TOGGLE_TODO':
			return state.map(v => todo(v, action))
		default:
			return state === undefined ? [] : state
	}
}

export default todos;
