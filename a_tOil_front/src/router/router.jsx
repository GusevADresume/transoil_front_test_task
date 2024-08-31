import React from "react";
import { Routes, Route } from "react-router-dom";
import {LoginView} from '../pages/LoginView'
import { MainPage } from "../pages/MainPage";
import { Account } from "../pages/Account";

function Router() {
    return (
      <Routes>
        <Route path="/" element={<LoginView />} />
        <Route path="/mainpage" element={<MainPage />} />
        <Route path="/account" element={<Account />} />
      </Routes>
    );
  }
  
export {Router}