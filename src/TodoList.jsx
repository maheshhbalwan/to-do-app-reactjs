import { TodoItem } from "./TodoItem";

export default function TodoList({ todos, toggleTodo, deleteTodo }) {
  return (
    <ul className="relative px-6 pt-6 pb-6 mx-auto rounded-lg bg-teal-50 ring-1 ring-gray-900/5">
      {todos.length === 0 && "No Todos found"}
      {todos.map((todo) => {
        return (
          <TodoItem
            {...todo}
            // id={todo.id}
            // completed={todo.completed}
            // title={todo.title}
            key={todo.id}
            toggleTodo={toggleTodo}
            deleteTodo={deleteTodo}
          />
        );
      })}
    </ul>
  );
}
