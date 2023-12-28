import { configureStore } from "@reduxjs/toolkit";
import sliceTodos from "./sliceTodos";

const store = configureStore({
  reducer: {
    todos: sliceTodos,
  }
})

export default store;
