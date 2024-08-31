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
    <div>
      <form>
        <input placeholder="Login" onChange={(e) => setLogHandler(e)}></input>
        <input
          placeholder="Password"
          onChange={(e) => setPassHandler(e)}
        ></input>
        <button onClick={sendFormHandler}>Login</button>
      </form>
      {wrongData ? <p>Wrong data</p> : ""}

      <div>
        <div>
            <p>User, who can use a table</p>
            <p>TableUser</p>
            <p>123user*</p>
        </div>
        <div>
            <p>User, who can't use a table</p>
            <p>SimpleUser</p>
            <p>123user*</p>
        </div>
      </div>
    </div>
  );
}

export { LoginView };
