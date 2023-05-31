import { TodoItem } from "./TodoItem";

export default function TodoList({ todos, toggleTodo, deleteTodo }) {
  return (
    <ul className="relative mx-auto rounded-lg bg-teal-50 px-6 pb-6 pt-6 ring-1 ring-gray-900/5">
      {todos.length === 0 && "No Todos found"}
      {todos.map((todo) => {
        return (
          <TodoItem
            {...todo}
            key={todo.id}
            toggleTodo={toggleTodo}
            deleteTodo={deleteTodo}
          />
        );
      })}
    </ul>
  );
}
