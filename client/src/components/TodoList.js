import React from 'react'

function TodoList(props) {
  return (
    <div className='container'>
      {
        props.allTodos.map(todo => {
          return (
            <div className={`${!todo.done ? 'todo' : 'done'}`}>
              <p>{todo.title}</p>
              <input type='checkbox'
                onClick={() => {
                  props.updateTodos(todo.id, !todo.done)
                }}
                checked={todo.done}
              />
              <button className='delete-btn'
              onClick={() => {
                props.deleteTodo(todo.id)
              }}
              >Delete</button>
            </div>)
        })
      }
    </div>
  )
}

export default TodoList