import React from "react";
import { contentRequest } from "../requests/contentRequest";
import { useState, useEffect } from "react";
import { baseUrl } from "../requests/baseUrl";
import { Link } from "react-router-dom";

function Account() {
  const [firstName, setFirstName] = useState("user");
  const [tAccess, setTAccess] = useState("");
  const [lastName, setlastName] = useState("");
  const [photo, setphoto] = useState("");
  const [info, setlinfo] = useState("");
  const [email, setEmail] = useState("");

  useEffect(() => {
    const addInfo = async () => {
      const data = await contentRequest("user");
      setFirstName(data.user[0].first_name);
      setlastName(data.user[0].last_name);
      setEmail(data.user[0].email);
      setphoto(data.info[0].user_photo);
      setlinfo(data.info[0].some_info);
      setTAccess(data.info[0].table_access);
    };
    addInfo();
  }, []);
  return (
    <div className="w-full flex justify-center items-center">
      <div className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 p-10 m-10">
        <div className="flex justify-end px-4 pt-4"></div>
        <div className="flex flex-col items-center pb-10">
          <img
            className="w-24 h-24 mb-3 rounded-full shadow-lg"
            src={`${baseUrl()}${photo}`}
            alt="Bonnie image"
          />
          <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">
            {firstName} {lastName}
          </h5>
          <span className="text-sm text-gray-500 dark:text-gray-400">
            {email}
          </span>
          <span className="text-sm text-gray-500 dark:text-gray-400">
            {info}
          </span>
          {tAccess ? (
            <Link
              className="py-2 px-4 m-10 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
              to={"/table"}
            >
              Table
            </Link>
          ) : (
            ""
          )}
        </div>
      </div>
    </div>
  );
}

export { Account };
