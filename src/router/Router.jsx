import React, { createContext, useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AppStart from "../components/appStar/AppStart";
import SignIn from "../login/signIn/SignIn";
import Inicio from "../home/inicioStart/Inicio";
import Comunity from "../home/comunity/Comunity";
import Perfil from "../home/perfil/Perfil";
import Search from "../home/search/Search";
import Menu from "../home/menu/Menu";
import Register from "../login/register/Register";

export const Appcontext = createContext({});

const Router = () => {
  const [filterButton, setFilterButton] = useState(-1);
  const [width, setwidth] = useState(window.innerWidth);

  useEffect(() => {
    const resizeCarrusel = () => {
      setwidth(window.innerWidth);
    };

    window.addEventListener("resize", resizeCarrusel);
    return () => {
      window.removeEventListener("resize", resizeCarrusel);
    };
  });

  return (
    <Appcontext.Provider
      value={{
        filterButton,
        setFilterButton,
        width,
      }}
    >
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
        </Routes>
      </BrowserRouter>
    </Appcontext.Provider>
  );
};

export default Router;
