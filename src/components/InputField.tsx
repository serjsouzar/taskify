import React, {useRef} from "react";
import "./styles.css";

interface InputProps {
  todo: string;
  setTodo: React.Dispatch<React.SetStateAction<string>>;
  handleCreateTodo: (e: React.FormEvent) => void;
}

const InputField = ({ todo, setTodo, handleCreateTodo }: InputProps) => {

  const inputRef = useRef<HTMLInputElement>(null)

  return (
    <form className="input" onSubmit={(e) => {
        handleCreateTodo(e)
        inputRef.current?.blur()  
        }}>
      <input
        ref={inputRef}
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
