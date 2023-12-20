import './App.css';
import { BrowserRouter, Routes, Route, useParams } from "react-router-dom";
import Layout from "./Layout.js";
import Home from "./Home.js";
import NoPage from "./NoPage.js";
import SignIn from './SignIn.js';
import SignUp from './SignUp.js';
import Dash from './Dash.js';
import Logout from './Logout.js';
import React, {  } from "react";
import ReactDOM from "react-dom/client";
import { NavProvider } from './NavContext.js';
import { useEffect } from "react";


export default function App() {
  return (
    <NavProvider>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="Login" element={<SignIn />} />
          <Route path="Register" element={<SignUp />} />
          <Route path="Logout" element={<Logout />} />
          <Route path="Dashboard" element={<Dash />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
    </NavProvider>
  );
}