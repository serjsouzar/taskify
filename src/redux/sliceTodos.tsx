import { createSlice } from "@reduxjs/toolkit";
import { PayloadAction } from "@reduxjs/toolkit";

interface Todos {
  name: string;
  isDone: boolean;
  id: number;
}

const INITIAL_STATE: Todos[] = [];

const sliceTodos = createSlice({
  name: "todos",
  initialState: INITIAL_STATE,
  reducers: {
    addTodo(state, { payload }: PayloadAction<string>) {
      return [...state, { name: payload, id: Date.now(), isDone: false }];
    },
    removeTodo(state, {payload}: PayloadAction<number>){
      return [...state.filter((todo) => todo.id !== payload)]
    },  
    isDoneTodo(state, {payload}: PayloadAction<number>){
      return [...state.map((todo) => todo.id === payload ? {...todo, isDone: !todo.isDone} : todo)]
    },
    editTodo(state, action){      
      return [...state.map((todo) => todo.id === action.payload[1] ? {...todo, name: action.payload[0]} : todo)]      
    }        
  },
});

export default sliceTodos.reducer
export const { addTodo, removeTodo, isDoneTodo, editTodo } = sliceTodos.actions;

export const useTodos = (state:any) => { 
  return state.todos as Todos[]
}