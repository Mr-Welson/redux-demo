let nextTodoId = 0;

// actionCreators
export const addTodo = (text) => {
    nextTodoId++;
    return {
        type: 'ADD_TODO',
        id: nextTodoId,
        text
    }
}

export const setVisibility = (filter) => {
    return {
        type: 'SET_VISIBILITY_FILTER',
        filter
    }
}

export const setComplete = (id) => {
    return {
        type: 'SET_COMPLETE',
        id
    }
}