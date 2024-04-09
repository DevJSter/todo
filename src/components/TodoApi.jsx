import React, { useState, useEffect } from "react";
import axios from "axios";
import { Todo } from "./Todo";
import { TodoForm } from "./TodoForm";
import { EditTodoForm } from "./EditTodoForm";

export const TodoAPI = () => {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://jsonplaceholder.typicode.com/todos"
        ); //By using axios we are fetching the todos from https://jsonplaceholder.typicode.com/todos
        const formattedData = response.data.map((todo) => ({ // Since the data coming is huge in number ("200 todos") we are using .map function to store the whole datainto formattedData
          id: Math.floor(Math.random() * 1000000), // Generates a random ID
          task: todo.title,
          completed: todo.completed,
          isEditing: false,
        }));
        setTodos(formattedData); // This setter function of useState is used to fill up the todos new values which are cam from the api
      } catch (error) {
        console.error("Error fetching todos:", error);
      }
    };
    fetchData();
  }, []); // We are using useEffect hook to ensure this api call should be made only once when this component is rendered

  const addTodo = (todo) => {
    const newTodo = {
      id: Math.floor(Math.random() * 1000000), // Generates a random ID we can also use uuvid() for the generation of the random id
      task: todo,
      completed: false,
      isEditing: false,
    };
    setTodos([...todos, newTodo]); // Since we are using formattedData to store the whole todos coming from the api we can add delete the todos as the new todos will be stored in the formattedData
  };

  const deleteTodo = (id) => setTodos(todos.filter((todo) => todo.id !== id)); //By using filter we are removing the todo.id which is clicked on the frontend to be removed and updating the state

  const toggleComplete = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const editTodo = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, isEditing: !todo.isEditing } : todo
      )
    );
  };

  const editTask = (task, id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, task, isEditing: !todo.isEditing } : todo
      )
    );
  };

  return (
    <div className="bg-purple-600 min-h-screen flex justify-center items-center">
      <div className="bg-purple-700 mt-5 p-8 rounded-lg">
        <h1 className="text-white text-center text-2xl mb-4">
          Todo (Using API)
        </h1>
        <TodoForm addTodo={addTodo} />{" "}
        {/* This the component only used for adding the todos received as  the props are passed from TodoForm */}
        {todos.map((todo) =>
          todo.isEditing ? (
            <EditTodoForm editTodo={editTask} task={todo} key={todo.id} />
          ) : (
            <Todo 
              task={todo}
              key={todo.id}
              toggleComplete={toggleComplete}
              deleteTodo={deleteTodo}
              editTodo={editTodo}
              className="mb-4"
            />
          ) //In this if the user is editing then only for that component EdutTodoForm should be shown in the frontend and else the other todos should be there
        )}
      </div>
    </div>
  );
};
