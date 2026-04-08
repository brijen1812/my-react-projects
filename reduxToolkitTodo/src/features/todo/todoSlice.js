import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
  todos: [
    {
      id: 1,
      text: "Learn about redux toolkit",
    },
  ],
};

export const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      const todo = {
        id: nanoid(),
        text: action.payload,
      };
      state.todos.push(todo);
    },
    removeTodo: (state, action) => {
      const confirmDelete = window.confirm(
        "Are you sure you want to delete this todo?",
      );
      if (confirmDelete) {
        state.todos = state.todos.filter((todo) => todo.id !== action.payload);
      } else {
        return;
      }
    },
    setEditingTodo: (state, action) => {
      state.editingTodo = action.payload;
    },
    updateTodo: (state, action) => {
      const { id, text } = action.payload;
      const existingTodo = state.todos.find((todo) => todo.id === id);
      if (existingTodo) {
        existingTodo.text = text;
      }
      state.editingTodo = null;
    },
  },
});

export const { addTodo, removeTodo, updateTodo, setEditingTodo } =
  todoSlice.actions;

export default todoSlice.reducer;
