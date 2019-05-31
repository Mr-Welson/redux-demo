
const todos = (state = [], action) => {
	switch(action.type){
		case 'ADD_TODO':
			return [
				...state,
				{
          id: action.id,
          text: action.text,
          complete: false
        }
			]
    case 'SET_COMPLETE':
      const newState = state.map(v => {
        if(v.id === action.id) {
          v.complete = !v.complete;
        }
        return v
      })
			return newState;
		default:
			return state
	}
}

export default todos;
