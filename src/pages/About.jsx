import React from "react";
import MainLayout from "../layouts/MainLayout";

function About() {
  return (
    <MainLayout>
      <div className="mx-auto h-full w-full max-w-xl px-4 py-6">
        <h1 className="mb-4 text-5xl font-extrabold text-gray-900 ">
          <span className="bg-gradient-to-r from-gray-400 to-gray-600 bg-clip-text text-2xl text-transparent">
            About{" "}
            <mark class="rounded bg-gradient-to-r from-sky-400 to-emerald-600 px-2 text-white dark:bg-blue-500">
              Just Do It
            </mark>{" "}
            Task Manager
          </span>
        </h1>
        <p>
          <ul className="text-lg font-bold text-gray-500 dark:text-gray-400 lg:text-xl">
            Tech stack
          </ul>
          <p className="mb-4 text-lg font-normal text-gray-500 dark:text-gray-400 lg:text-xl">
            <li>React JS (Javascript library)</li>
            <li>Tailwind CSS (CSS framework)</li>
          </p>
        </p>
        <p>
          <ul className="text-lg font-bold text-gray-500 dark:text-gray-400 lg:text-xl">
            Features
          </ul>
          <p className="mb-4 text-lg font-normal text-gray-500 dark:text-gray-400 lg:text-xl">
            <li>Add new item</li>
            <li>Mark item as completed</li>
            <li>Delete an item</li>
            <li>Local storage of to-do items</li>
          </p>
        </p>
      </div>
    </MainLayout>
  );
}

export default About;
