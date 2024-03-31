import React, { useState } from "react";

export const TodoForm = ({ addTodo }) => {
  const [value, setValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (value) {
      addTodo(value);
      setValue("");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="TodoForm w-full mb-1">
      <input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        className="todo-input outline-none bg-none border border-purple-600 px-4 py-2 mt-4 mb-8 w-72 text-white"
        placeholder="What is the task today?"
      />
      <button
        type="submit"
        className="todo-btn bg-purple-600 text-white border-none px-3 py-2 cursor-pointer"
      >
        Add Task
      </button>
    </form>
  );
};
