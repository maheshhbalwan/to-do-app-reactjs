import { useState } from "react";

export function NewTodoForm({ onSubmit }) {
  const [newItem, setNewItem] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    if (newItem === "") return;

    onSubmit(newItem);
    setNewItem(""); // clears the input area
  }
  return (
    <form onSubmit={handleSubmit} className="">
      <div className="">
        <input
          placeholder="Enter your task"
          className="mt-2 block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500   focus:ring-blue-500"
          value={newItem}
          onChange={(e) => setNewItem(e.target.value)}
          type="text"
          id="item"
        />
      </div>
      {/* <button className="">Add</button>  */}
      <button className="mb-2 mr-2 mt-2 rounded-lg bg-gradient-to-r from-cyan-500 to-blue-500 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-gradient-to-bl focus:outline-none focus:ring-4 focus:ring-cyan-300 dark:focus:ring-cyan-800 ">
        Add Task
      </button>
    </form>
  );
}
