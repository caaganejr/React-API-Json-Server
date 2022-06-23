import './App.css';
import AddTodo from './components/AddTodo';
import TodoList from './components/TodoList';
import { useState } from 'react'
import axios from 'axios'

function App() {

  // create API Var
  const api = axios.create({
    baseURL: 'http://localhost:3001/todos'
  })

  // States
  const [allTodos, setAllTodos] = useState([]);
  const [todoTitle, setTodoTilte] = useState('');

  // Get All Data
  const getTodos = () => {
    api
      .get('/')
      .then(({data}) => {
        // console.log(data);
        setAllTodos(data)
      })
      .catch(err => {
        console.error(err);
      })
  }
  getTodos()

  // Post data
  const addTodos = () => {
    api
      .post('/', {
        title: todoTitle,
        done: false
      })
      .then(() => {
        // console.log(data);
        console.log('Todo Added');
      })
      .catch(err => {
        console.error(err);
      })
  }

  // Update Data
  const updateTodos = (id, done) => {
    api
      .patch('/'+id, {
        done: done
      })
      .then(() => {
        // console.log(data);
        console.log('Todo Updated!');
      })
      .catch(err => {
        console.error(err);
      })
  }

  // Delete Data
  const deleteTodo = (id) => {
    api
      .delete('/'+id)
      .then(() => {
        // console.log(data);
        console.log('Todo Deleted!');
      })
      .catch(err => {
        console.error(err);
      })
  }

  return (
    <>
      <AddTodo setTodoTilte={setTodoTilte} addTodos={addTodos} />
      <TodoList allTodos={allTodos} updateTodos={updateTodos} deleteTodo={deleteTodo} />
    </>
  );
}

export default App;
