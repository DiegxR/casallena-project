import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AppStar from "../components/appStar/AppStar";
import Inicio from "../home/inicioStart/Inicio";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Inicio />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
