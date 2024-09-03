import React from "react";
import { useState } from "react";
import { logRequest } from "../requests/loginRequest";
import { useNavigate } from "react-router";

function LoginView() {
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  const [wrongData, setWrongData] = useState(false);
  const navigate = useNavigate();

  const setLogHandler = (e) => {
    setLogin(e.target.value);
  };

  const setPassHandler = (e) => {
    setPassword(e.target.value);
  };

  const sendFormHandler = async (e) => {
    e.preventDefault();
    const formdata = new FormData();
    formdata.append("username", login);
    formdata.append("password", password);
    if ((await logRequest(formdata)) == true) {
      navigate("/mainpage");
    } else {
      setWrongData(true);
    }
  };

  return (
    <div className="w-full  flex justify-center items-center p-10">
      <div className="w-full max-w-xs ">
        <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              Username
            </label>
            <input
              placeholder="Login"
              onChange={(e) => setLogHandler(e)}
            ></input>
          </div>
          <div className="mb-6">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              Password
            </label>
            <input
              placeholder="Password"
              onChange={(e) => setPassHandler(e)}
            ></input>
          </div>
          <div className="flex items-center justify-between">
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="button"
              onClick={sendFormHandler}
            >
              Login
            </button>
          </div>
        </form>
        {wrongData ? <p>Wrong data</p> : ""}
        <div className="font-mono flex justify-start w-11/12">
          <div className = 'pr-8 w-screen'>
            <p className="text-l">Table Usere</p>
            <p className="text-xs">Login: TableUser</p>
            <p className="text-xs">Password: 123user*</p>
          </div>
          <div className = 'w-screen'>
            <p className="text-l">Simple User</p>
            <p className="text-xs">Login: SimpleUser</p>
            <p className="text-xs">Password: 123user*</p>
          </div>
        </div>
      </div>
      
    </div>
    
  );
}

export { LoginView };
