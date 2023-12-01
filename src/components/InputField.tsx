import React from "react";
import "./styles.css";

interface InputProps {
  todo: string;
  setTodo: React.Dispatch<React.SetStateAction<string>>;
  handleCreateTodo: (e: React.FormEvent) => void;
}

const InputField = ({ todo, setTodo, handleCreateTodo }: InputProps) => {
  return (
    <form className="input" onSubmit={handleCreateTodo}>
      <input
        className="input__box"
        type="text"
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
        placeholder="Enter a Task"
      />
      <button className="input_submit" type="submit">
        Go!
      </button>
    </form>
  );
};

export default InputField;
