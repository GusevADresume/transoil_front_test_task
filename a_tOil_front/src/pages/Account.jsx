import React from "react";
import { contentRequest } from "../requests/contentRequest";
import { useState, useEffect } from "react";
import { baseUrl } from "../requests/baseUrl";

function Account() {
  const [firstName, setFirstName] = useState('user');
  const [tAccess, setTAccess] = useState('');
  const [lastName, setlastName] = useState('');
  const [photo, setphoto] = useState('');
  const [info, setlinfo] = useState('');
  const [email, setEmail] = useState('');

  useEffect(() => {
    const addInfo = async () => {
      const data = await contentRequest("user");
      console.log(data)
      setFirstName(data.user[0].first_name)
      setlastName(data.user[0].last_name)
      setEmail(data.user[0].email)
      setphoto(data.info[0].user_photo)
      setlinfo(data.info[0].some_info)
    };
    addInfo();
  }, []);


  return (
    <div>
      <div>
        <img
          src={`${baseUrl()}${photo}`}
          alt="photoalt"
        />
      </div>
      <div>
        <p>{tAccess}</p>
        <p>{firstName}</p>
        <p>{lastName}</p>
        <p>{email}</p>
        <p>{info}</p>
      </div>
    </div>
  );
}

export { Account };
