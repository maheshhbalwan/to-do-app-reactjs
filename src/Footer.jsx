import React from "react";

export default function Footer() {
  return (
    <footer class="m-4 rounded-lg bg-white shadow dark:bg-gray-800">
      <div class="mx-auto w-full max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
        <span class="text-sm text-gray-500 dark:text-gray-400 sm:text-center">
          © 2023{" "}
          <a
            href="https://github.com/maheshhbalwan"
            target="blank"
            class="hover:underline"
          >
            JustDoIt™
          </a>
          . This is project purposes only.
        </span>
        <span class="text-sm text-gray-500 dark:text-gray-400 sm:text-center">
          Made with 💻 by{" "}
          <a
            href="https://github.com/maheshhbalwan"
            target="blank"
            class="hover:underline"
          >
            Maheshh Balwan
          </a>{" "}
        </span>
        <ul class="mt-3 flex flex-wrap items-center text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0">
          <li>
            <a
              href="https://github.com/maheshhbalwan"
              target="blank"
              class="hover:underline"
            >
              Contact Me
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
}
