import './App.css';
import React, {useState} from 'react'
import InputField from './components/InputField';
import { Todo } from './types/types';

const App: React.FC = () => {

  const [todo, setTodo] = useState<string>("")
  const [todos, setTodos] = useState<Todo[]>([])

  function handleCreateTodo(e:React.FormEvent) {
    e.preventDefault();
    if(todo)
    setTodos([...todos, {id:Date.now(),todo,isDone:false}])
  }

  console.log(todos)

  return (
    <div className="App">
      <span className='heading'>Taskify</span>
      <InputField todo={todo} setTodo={setTodo} handleCreateTodo={handleCreateTodo}/>
      <ul>{todos.map((i) => (
        <li key={i.id}>{i.todo}</li>
      ))}</ul>
    </div>
  );
}

export default App;
