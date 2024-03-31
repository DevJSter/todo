import React, { useState } from "react";

export const EditTodoForm = ({ editTodo, task }) => {
  const [value, setValue] = useState(task.task);

  const handleSubmit = (e) => {
    e.preventDefault();
    editTodo(value, task.id);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        className="todo-input outline-none bg-none border border-purple-600 px-4 py-2 mt-4 mb-8 w-72 text-black"
        placeholder="Update task"
      />
      <button
        type="submit"
        className="todo-btn bg-purple-600 text-black border-none px-3 py-2 cursor-pointer"
      >
        Update Task
      </button>
    </form>
  );
};
