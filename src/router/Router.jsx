import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AppStar from "../components/appStar/AppStar";
import Inicio from "../home/inicioStart/Inicio";
import Register from "../login/register/Register";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
