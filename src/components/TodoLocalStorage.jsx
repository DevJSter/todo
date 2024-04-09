import React, { useState, useEffect } from "react";
import { TodoForm } from "./TodoForm";
import { Todo } from "./Todo";
import { EditTodoForm } from "./EditTodoForm";


export const TodoWrapperLocalStorage = () => {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    const savedTodos = JSON.parse(localStorage.getItem("todos")) || []; //Here localStorage of browser is used to retrieve the todos of the user
    setTodos(savedTodos);
  }, []);

  const addTodo = (todo) => {
    const newTodos = [
      ...todos, //Spread operator is used for making sure the previos todos should be there as we create a new todo
      {
        id: Math.floor(Math.random() * 1000000),
        task: todo,
        completed: false,
        isEditing: false,
      },
    ];
    setTodos(newTodos);
    localStorage.setItem("todos", JSON.stringify(newTodos)); // This is to store the data in the localstorage as even though we refresh or restart the browser the todos should be there
  };

  const toggleComplete = (id) => {
    const newTodos = todos.map((todo) =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    );
    setTodos(newTodos);
    localStorage.setItem("todos", JSON.stringify(newTodos));
  };

  const deleteTodo = (id) => {
    const newTodos = todos.filter((todo) => todo.id !== id);
    setTodos(newTodos);
    localStorage.setItem("todos", JSON.stringify(newTodos));
  };

  const editTodo = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, isEditing: !todo.isEditing } : todo
      )
    );
  };

  const editTask = (task, id) => {
    const newTodos = todos.map((todo) =>
      todo.id === id ? { ...todo, task, isEditing: !todo.isEditing } : todo
    );
    setTodos(newTodos);
    localStorage.setItem("todos", JSON.stringify(newTodos));
  };

  return (
    <div className="bg-purple-600 min-h-screen flex justify-center items-center">
      <div className="bg-purple-700 mt-5 p-8 rounded-lg">
        <h1 className="text-white text-center text-2xl mb-4">
          Todo(Using Local Storage)
        </h1>
        <TodoForm addTodo={addTodo} />
        {todos.map((todo, index) =>
          todo.isEditing ? (
            <EditTodoForm editTodo={editTask} task={todo} key={todo.id} />
          ) : (
            <Todo
              task={todo}
              key={index}
              toggleComplete={toggleComplete}
              deleteTodo={deleteTodo}
              editTodo={editTodo}
              className="mb-4"
            />
          )
        )}
      </div>
    </div>
  );
};
