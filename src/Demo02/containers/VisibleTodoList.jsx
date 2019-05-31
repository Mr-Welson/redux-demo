import React from 'react';
import { connect } from 'react-redux';
import { setComplete } from '../actions';
import TodoList from '../components/TodoList';

const getVisibleTodos = (todos, filter) => {
  switch(filter) {
    case 'SHOW_ALL':
        return todos
    case 'SHOW_COMPLETED':
        return todos.filter(v => v.complete)
    case 'SHOW_ACTIVE':
        return todos.filter(v => !v.complete)
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    todos: getVisibleTodos(state.todos, state.visibilityFilter)
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onTodoClick(id) {
      dispatch(setComplete(id))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoList)