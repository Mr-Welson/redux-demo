import React from 'react';
import { connect } from 'react-redux';
import { addTodo } from '../actions';

const AddTodo = ({ dispatch }) => {
    let input;

    return (
        <div>
            <form onSubmit={e => {
                e.preventDefault();
                if(!input.value.trim()){
                    return
                }
                dispatch(addTodo(input.value))
                input.value = ''
            }}>
                <input type="text" ref={node => input = node}/>
                <button type='htmlSubmit'>add todo</button> 
            </form>
        </div>
    )
}

export default connect()(AddTodo);
