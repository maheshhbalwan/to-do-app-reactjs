import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="m-4 rounded-lg bg-white shadow dark:bg-gray-800">
      <div className="mx-auto flex w-full max-w-screen-xl items-center justify-between p-4">
        <span className="text-sm text-gray-500 dark:text-gray-400 sm:text-center">
          © 2023{" "}
          <Link to="/" className="hover:underline">
            JustDoIt™
          </Link>
        </span>
        <span className="text-sm text-gray-500 dark:text-gray-400 sm:text-center">
          Made with 💻 by{" "}
          <Link
            to="https://github.com/maheshhbalwan"
            target="blank"
            className="hover:underline"
          >
            Maheshh Balwan
          </Link>
        </span>
      </div>
    </footer>
  );
}
