import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addTodo,
  updateTodo,
  setEditingTodo,
} from "../features/todo/todoSlice";

function AddTodo() {
  const [input, setInput] = useState("");
  const dispatch = useDispatch();

  const editingTodo = useSelector((state) => state.editingTodo);

  useEffect(() => {
    if (editingTodo) {
      setInput(editingTodo.text);
    }
  }, [editingTodo]);

  const addTodoHandler = (e) => {
    e.preventDefault();

    if (input.trim() === "") return;

    if (editingTodo) {
      dispatch(updateTodo({ id: editingTodo.id, text: input }));
    } else {
      dispatch(addTodo(input));
    }

    setInput("");
  };

  const cancelEdit = () => {
    dispatch(setEditingTodo(null));
    setInput("");
  };

  return (
    <div className="content-center flex justify-center">
      <form onSubmit={addTodoHandler} className="space-x-3 mt-12">
        <input
          type="text"
          className="bg-gray-800 rounded border-3 border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8"
          placeholder="Enter a Todo..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />

        <button
          type="submit"
          className="text-white bg-indigo-500 font-bold border-0 py-2 px-6 hover:bg-indigo-600 rounded text-lg"
        >
          {editingTodo ? "Update Todo" : "Add Todo"}
        </button>

        {editingTodo && (
          <button
            type="button"
            onClick={cancelEdit}
            className="text-white font-bold bg-green-500 py-2 px-6 hover:bg-green-600 rounded text-lg"
          >
            Close
          </button>
        )}
      </form>
    </div>
  );
}

export default AddTodo;
