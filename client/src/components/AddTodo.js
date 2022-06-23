import React from 'react'

function AddTodo(props) {
    return (
        <div className='input-box'>
            <input type='text'
                onChange={(e) => {
                    props.setTodoTilte(e.target.value)
                }}
            />
            <button
                onClick={() => {
                    props.addTodos();
                }}
            >Add Todo</button>
        </div>
    )
}

export default AddTodo