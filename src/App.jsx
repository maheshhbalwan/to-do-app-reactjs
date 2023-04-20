import { useEffect, useState } from "react";
import "./globals.css";
import { NewTodoForm } from "./NewTodoForm";
import TodoList from "./TodoList";
import NavBar from "./NavBar";
import Footer from "./Footer";

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
      <NavBar />
      <div class="mx-auto max-w-xl px-4 py-6">
        <div class="  relative mx-auto rounded-lg bg-white px-8 pb-8 pt-10 shadow-xl ring-1 ring-gray-900/5 ">
          <h1 class="mb-4 text-5xl font-extrabold text-gray-900 ">
            <span class="bg-gradient-to-r from-sky-400 to-emerald-600 bg-clip-text text-5xl text-transparent">
              Just Do It
            </span>
            🚀
            <span class="bg-gradient-to-r from-gray-400 to-gray-600 bg-clip-text text-2xl text-transparent">
              Task manager
            </span>
          </h1>
          <p class=" mb-10 text-lg font-normal text-gray-500 dark:text-gray-400 lg:text-xl">
            This app makes it easier for you to plan you work by using online
            to-do lists.
          </p>
          <NewTodoForm onSubmit={addTodo} />
          <p class="mb-2 mt-6 bg-gradient-to-r from-gray-600 to-gray-900 bg-clip-text text-lg text-transparent">
            My Tasks:
          </p>

          <TodoList
            todos={todos}
            toggleTodo={toggleTodo}
            deleteTodo={deleteTodo}
          />
        </div>
      </div>
      <Footer />
    </>
  );
}
