import React, {useState} from "react";
import { Todo } from "../types/types";
import { AiFillEdit } from "react-icons/ai";
import { MdDone } from "react-icons/md";
import { AiFillDelete } from "react-icons/ai";

interface SingleTodoProps {
  todo: Todo;
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}

const SingleTodo = ({ todo, todos, setTodos }: SingleTodoProps) => {

  const [edit, setEdit] = useState<boolean>(false)
  const [editTodo, setEditTodo] = useState<string>("")


  function handleDelete(id: number) {
    setTodos(todos.filter((todo) => todo.id !== id));
  }

  function handleIsDone(id: number) {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, isDone: !todo.isDone } : todo
      )
    );
  }

  function handleEditTodo(e:React.FormEvent, id: number) {
    e.preventDefault()

    setTodos(todos.map((todo) => (
      todo.id === id ? {...todo, todo: editTodo} : todo
    )))
    setEdit(false)
  }

  return (
    <form className="todos__single" onSubmit={(e) => handleEditTodo(e, todo.id)}>
    {
      edit ?
      (
        <input type="text" value={editTodo} onChange={(e) => setEditTodo(e.target.value)}/>
      ) : todo.isDone ? (
        <s className="todos__single--text">{todo.todo} </s>
      ) : (
        <span className="todos__single--text">{todo.todo}</span>
      ) 
    }
    
      <div>
        <span className="icon">
          <AiFillEdit onClick={() => setEdit(true)}/>
        </span>
        <span className="icon">
          <MdDone onClick={() => handleIsDone(todo.id)} />
        </span>
        <span className="icon">
          <AiFillDelete onClick={() => handleDelete(todo.id)} />
        </span>
      </div>
    </form>
  );
};

export default SingleTodo;
