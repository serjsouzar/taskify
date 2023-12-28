import SingleTodo from './SingleTodo';
import { Todos } from '../types/types';

interface TodoListProps {
  todos: Todos[]  
}

const TodoList = ({todos}: TodoListProps) => {  

  return (
    <div className='todos'>
      {todos.map((todo) => (
        <SingleTodo todo={todo} todos={todos}/>
      ))}
    </div>
  )
}

export default TodoList