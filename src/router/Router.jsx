import React, { createContext, useEffect, useState } from "react";
import { BrowserRouter, Route, Routes, useNavigate } from "react-router-dom";
import AppStart from "../components/appStar/AppStart";
import SignIn from "../login/signIn/SignIn";
import Inicio from "../home/inicioStart/Inicio";
import Comunity from "../home/comunity/Comunity";
import Perfil from "../home/perfil/Perfil";
import Search from "../home/search/Search";
import Menu from "../home/menu/Menu";
import Register from "../login/register/Register";
import PlayDetail from "../home/playDetail/PlayDetail";
import LoadPhotoUser from "../login/register/loadPhotoUser/LoadPhotoUser";
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from "../firebase/firebaseConfig";
import { useDispatch } from 'react-redux'
import { getUserCollection } from "../services/getUser";
import { loginUser } from "../redux/actions/userActions";

export const Appcontext = createContext({});

const Router = () => {
  const [filterButton, setFilterButton] = useState(-1);
  const [width, setwidth] = useState(window.innerWidth);
  const dispatch = useDispatch()
  useEffect(() => {
    const resizeCarrusel = () => {
      setwidth(window.innerWidth);
    };

    window.addEventListener("resize", resizeCarrusel);
    return () => {
      window.removeEventListener("resize", resizeCarrusel);
    };
  });
  useEffect(() => {
    onAuthStateChanged(auth, async (user) => {
      if (user) {
        console.log(user)
        const currentUser = await getUserCollection(user.uid)
        console.log(currentUser)
        dispatch(loginUser(currentUser, { status: false, message: '' }))
      } else {
        
      }
    })
  }, [])
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
          <Route path="/detail" element={<PlayDetail />} />
          <Route path="/photouser" element={<LoadPhotoUser />} />
        </Routes>
      </BrowserRouter>
    </Appcontext.Provider>
  );
};

export default Router;
