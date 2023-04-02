import React, { useContext } from "react";
import { userAuth } from "../Context/AuthContext";

const Footer = () => {
  const { user } = userAuth();

  return (
    <footer className="bg-white rounded-lg shadow dark:bg-gray-900 m-4">
      <div className="w-full container mx-auto p-4 md:px-6 md:py-8">
        <div className="sm:flex sm:items-center sm:justify-between">
          <a href="/" class="flex items-center mb-4 sm:mb-0">
            <img
              src="https://pakistanatlas.com/wp-content/uploads/2020/09/Pakistani-Food_0102_103-Anday-wala-burger.png"
              className="h-8 mr-3"
              alt="Flowbite Logo"
            />
            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
              Food Villa
            </span>
          </a>
          <ul className="flex flex-wrap items-center mb-6 text-sm text-gray-500 sm:mb-0 dark:text-gray-400">
            <li>
              <a href="#" className="mr-4 hover:underline md:mr-6"></a>
            </li>
            <li>
              <a href="#" className="mr-4 hover:underline md:mr-6 ">
                {user && user.email}
              </a>
            </li>
          </ul>
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">
          ©
          <a href="https://flowbite.com/" className="hover:underline">
            Food Villa
          </a>
          . All Rights Reserved.
        </span>
      </div>
    </footer>
  );
};

export default Footer;
