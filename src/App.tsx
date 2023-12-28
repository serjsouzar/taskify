import './App.css';
import React, {useState} from 'react'
import InputField from './components/InputField';
import { Todo } from './types/types';
import SingleTodo from './components/SingleTodo';
import TodoList from './components/TodoList';

import { useTodos } from './redux/sliceTodos';
import { useDispatch, useSelector } from 'react-redux';

const App: React.FC = () => {

  const todos = useSelector(useTodos)

  const [todo, setTodo] = useState<string>("")

  const dispatch = useDispatch()
  //const [todos, setTodos] = useState<Todo[]>([])

  /* function handleCreateTodo(e:React.FormEvent) {
    e.preventDefault();
    if(todo)
    setTodos([...todos, {id:Date.now(),todo,isDone:false}])
  } */

  console.log(todos)

  return (
    <div className="App">
      <span className='heading'>Taskify</span>
      <InputField todo={todo} setTodo={setTodo} dispatch={dispatch}/>
      <TodoList todos={todos} />
    </div>
  );
}

export default App;
