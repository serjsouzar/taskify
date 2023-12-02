import React from 'react'
import { Todo } from '../types/types'
import SingleTodo from './SingleTodo';

interface TodoListProps {
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}

const TodoList = ({todos, setTodos}: TodoListProps) => {
  return (
    <div className='todos'>
      {todos.map((todo) => (
        <SingleTodo todo={todo} todos={todos} setTodos={setTodos}/>
      ))}
    </div>
  )
}

export default TodoList