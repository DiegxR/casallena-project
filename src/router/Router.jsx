import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AppStar from "../components/appStar/AppStar";
import Inicio from "../home/inicioStart/Inicio";
import Comunity from "../home/comunity/Comunity";
import Perfil from "../home/perfil/Perfil";
import Search from "../home/search/Search";
import Menu from "../home/menu/Menu";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/comunity" element={<Comunity />} />
        <Route path="/profile" element={<Perfil />} />
        <Route path="/search" element={<Search />} />
        <Route path="/menu" element={<Menu />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
