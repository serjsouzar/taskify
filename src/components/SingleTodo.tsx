import React, {useState} from "react";
import { Todos } from "../types/types";
import { AiFillEdit } from "react-icons/ai";
import { MdDone } from "react-icons/md";
import { AiFillDelete } from "react-icons/ai";
import { removeTodo, isDoneTodo, editTodo, useTodos } from '../redux/sliceTodos';
import { useDispatch, useSelector } from 'react-redux';


interface SingleTodoProps {
  todo: Todos;
  todos: Todos[];  
}

const SingleTodo = ({ todo }: SingleTodoProps) => {
  
  const dispatch = useDispatch()

  const [edit, setEdit] = useState<boolean>(false)
  const [editTodoState, setEditTodoState] = useState<string>("")


  function handleEditTodo(e:React.FormEvent, id: number) {
    e.preventDefault()
    dispatch(editTodo([editTodoState, id]))
    setEdit(false)
  } 

  return (
    <>
     <form className="todos__single"  onSubmit={(e) => handleEditTodo(e, todo.id)} >
    {
      edit ?
      (
        <input type="text"  value={editTodoState} onChange={(e) => setEditTodoState(e.target.value)} />
      ) : todo.isDone ? (
        <s className="todos__single--text">{todo.name} </s>
      ) : (
        <span className="todos__single--text">{todo.name}</span>
      ) 
    }
    
      <div>
        <span className="icon">
          <AiFillEdit  onClick={() => setEdit(true)} />
        </span>
        <span className="icon">
          <MdDone  onClick={() => dispatch(isDoneTodo(todo.id))} />
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
