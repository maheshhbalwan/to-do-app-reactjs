import React from "react";
import MainLayout from "../layouts/MainLayout";
import { useEffect, useState } from "react";
import { NewTodoForm } from "../components/NewTodoForm";
import TodoList from "../components/TodoList";

export default function App() {
  const [todos, setTodos] = useState(() => {
    const localValue = localStorage.getItem("ITEMS");
    if (localValue == null) return [];

    return JSON.parse(localValue);
  });

  useEffect(() => {
    localStorage.setItem("ITEMS", JSON.stringify(todos));
  }, [todos]);

  function addTodo(title) {
    setTodos((currentTodos) => {
      return [
        ...currentTodos,
        {
          id: crypto.randomUUID(),
          title,
          completed: false,
        },
      ];
    });
  }

  function toggleTodo(id, completed) {
    setTodos((currentTodos) => {
      return currentTodos.map((todo) => {
        if (todo.id === id) {
          return {
            ...todo,
            completed,
          };
        }
        return todo;
      });
    });
  }

  function deleteTodo(id) {
    setTodos((currentTodos) => {
      return currentTodos.filter((todo) => todo.id !== id);
    });
  }

  return (
    <>
      <MainLayout>
        <div className="max-w-xl px-4 py-6 mx-auto">
          <div className="relative px-8 pt-10 pb-8 mx-auto bg-white rounded-lg shadow-xl ring-1 ring-gray-900/5">
            <h1 className="mb-4 text-5xl font-extrabold text-gray-900 ">
              <span className="text-5xl text-transparent bg-gradient-to-r from-sky-400 to-emerald-600 bg-clip-text">
                Just Do It
              </span>
              📝
              <span className="text-2xl text-transparent bg-gradient-to-r from-gray-400 to-gray-600 bg-clip-text">
                Task manager
              </span>
            </h1>
            <p className="mb-10 text-lg font-normal text-gray-500 dark:text-gray-400 lg:text-xl">
              This app makes it easier for you to plan you work by using online
              to-do lists.
            </p>
            <NewTodoForm onSubmit={addTodo} />
            <p className="mt-6 mb-2 text-lg text-transparent bg-gradient-to-r from-gray-600 to-gray-900 bg-clip-text">
              My Tasks:
            </p>

            <TodoList
              todos={todos}
              toggleTodo={toggleTodo}
              deleteTodo={deleteTodo}
            />
          </div>
        </div>
      </MainLayout>
    </>
  );
}
