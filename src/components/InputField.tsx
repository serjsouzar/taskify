import React, {useRef} from "react";
import "./styles.css";
import { addTodo } from "../redux/sliceTodos";

interface InputProps {
  todo: string;
  setTodo: React.Dispatch<React.SetStateAction<string>>;
  dispatch: any //high order function assignation
}

const InputField = ({ todo, setTodo, dispatch }: InputProps) => {

  const inputRef = useRef<HTMLInputElement>(null)

  return (
    <form className="input" onSubmit={(e) => {
        e.preventDefault()
        dispatch(addTodo(todo))
        inputRef.current?.blur()
        setTodo("")  
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
