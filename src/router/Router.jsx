import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AppStart from "../components/appStar/AppStart";
import SignIn from "../login/signIn/SignIn";
import Inicio from "../home/inicioStart/Inicio";
import Comunity from "../home/comunity/Comunity";
import Perfil from "../home/perfil/Perfil";
import Search from "../home/search/Search";
import Menu from "../home/menu/Menu";
import Register from "../login/register/Register";
import PlayDetail from "../home/playDetail/PlayDetail";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AppStart />} />
        <Route path="/login" element={<SignIn />} />
        <Route path="/home" element={<Inicio />} />
        <Route path="/comunity" element={<Comunity />} />
        <Route path="/profile" element={<Perfil />} />
        <Route path="/search" element={<Search />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/register" element={<Register />} />
        <Route path="/playDetail" element={<PlayDetail />}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
