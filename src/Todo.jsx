import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare } from "@fortawesome/free-solid-svg-icons";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

export const Todo = ({ task, deleteTodo, editTodo, toggleComplete }) => {
  return (
    <div
      className={`Todo flex justify-between items-center ${
        task.completed ? "line-through" : ""
      } bg-purple-600 text-white p-3 rounded-md mb-4`}
    >
      <p className={`cursor-pointer`} onClick={() => toggleComplete(task.id)}>
        {task.task}
      </p>
      <div>
        <FontAwesomeIcon
          className="edit-icon text-white cursor-pointer mr-2"
          icon={faPenToSquare}
          onClick={() => editTodo(task.id)}
        />
        <FontAwesomeIcon
          className="delete-icon text-white cursor-pointer"
          icon={faTrash}
          onClick={() => deleteTodo(task.id)}
        />
      </div>
    </div>
  );
};
