import React, { useState } from "react";

export const TodoForm = ({ addTodo }) => {
  const [value, setValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (value) {
      addTodo(value); //This is to pass as the props to the  todoAPi/todolocalstorage
      setValue(""); //This is to empty the value after the props are passed to the todoapi and todolocalstorage using useState
    }
  };

  return (
    <form onSubmit={handleSubmit} className="TodoForm w-full mb-1">
      <input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        className="todo-input outline-none bg-none border border-purple-600 px-4 py-2 mt-4 mb-8 w-72 text-black"
        placeholder="What are the tasks today ?"
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
