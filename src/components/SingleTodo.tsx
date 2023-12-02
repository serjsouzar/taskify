import React from "react";
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
  return (
    <form className="todos__single">
      <span className="todos__single--text">{todo.todo}</span>

      <div>
        <span className="icon">
          <AiFillEdit />
        </span>
        <span className="icon">
          <MdDone />
        </span>
        <span className="icon">
          <AiFillDelete />
        </span>
      </div>

    </form>
  );
};

export default SingleTodo;
