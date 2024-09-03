import React from "react";
import { Routes, Route } from "react-router-dom";
import {LoginView} from '../pages/LoginView'
import { MainPage } from "../pages/MainPage";
import { Account } from "../pages/Account";
import { Table } from "../pages/Table";

function Router() {
    return (
      <Routes>
        <Route path="/" element={<LoginView />} />
        <Route path="/mainpage" element={<MainPage />} />
        <Route path="/account" element={<Account />} />
        <Route path="/table" element={<Table />}/>
      </Routes>
    );
  }
  
export {Router}