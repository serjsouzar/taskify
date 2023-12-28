import React, {useState} from "react";
import { Todos } from "../types/types";
import { AiFillEdit } from "react-icons/ai";
import { MdDone } from "react-icons/md";
import { AiFillDelete } from "react-icons/ai";
import { removeTodo, useTodos } from '../redux/sliceTodos';
import { useDispatch, useSelector } from 'react-redux';


interface SingleTodoProps {
  todo: Todos;
  todos: Todos[];  
}

const SingleTodo = ({ todo }: SingleTodoProps) => {

  const todos = useSelector(useTodos)
  const dispatch = useDispatch()

  const [edit, setEdit] = useState<boolean>(false)
  const [editTodo, setEditTodo] = useState<string>("")


/*   function handleDelete(id: number) {
    setTodos(todos.filter((todo) => todo.id !== id));
  }

  function handleIsDone(id: number) {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, isDone: !todo.isDone } : todo
      )
    );
  } */

/*   function handleEditTodo(e:React.FormEvent, id: number) {
    e.preventDefault()

    setTodos(todos.map((todo) => (
      todo.id === id ? {...todo, todo: editTodo} : todo
    )))
    setEdit(false)
  } */

  return (
    <>
     <form className="todos__single" /* onSubmit={(e) => handleEditTodo(e, todo.id)} */>
    {
      edit ?
      (
        <input type="text" /* value={editTodo} onChange={(e) => setEditTodo(e.target.value)} *//>
      ) : todo.isDone ? (
        <s className="todos__single--text">{todo.name} </s>
      ) : (
        <span className="todos__single--text">{todo.name}</span>
      ) 
    }
    
      <div>
        <span className="icon">
          <AiFillEdit /* onClick={() => setEdit(true)} *//>
        </span>
        <span className="icon">
          <MdDone /* onClick={() => handleIsDone(todo.id)}  *//>
        </span>
        <span className="icon">
          <AiFillDelete  onClick={() => {dispatch(removeTodo(todo.id))}}  />
        </span>
      </div>
    </form> 
    <></>
    </>
  );
};

export default SingleTodo;
