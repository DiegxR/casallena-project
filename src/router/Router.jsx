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
import Favorites from "../home/favorites/Favorites";
import Reservations from "../home/reservations/Reservations";
import LoadPhotoUser from "../login/register/loadPhotoUser/LoadPhotoUser";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../firebase/firebaseConfig";
import { getUserCollection } from "../services/getUser";
import { loginUser } from "../redux/actions/userActions";
import { useDispatch } from "react-redux";
import { loadTeatrosAsync } from "../redux/actions/teatrosActions";
import { getFilters, getObras } from "../redux/actions/obrasActions";
import NoAuth from "../components/noAuth/NoAuth";
import Reservas from "../home/Reservas/Reservas";
import FormReserva from "../home/formReserva/FormReserva";
import { getLocalReserva } from "../services/localInfoBoletas";
import ModalReservation from "../components/modalReservation/ModalReservation";

export const Appcontext = createContext({});

const Router = () => {
  const [filterButton, setFilterButton] = useState(-1);
  const [filterInput, setFilterInput] = useState("");

  const [formatterPeso, setFormatterPeso] = useState(
    new Intl.NumberFormat("es-CO", {
      style: "currency",
      currency: "COP",
      minimumFractionDigits: 0,
    })
  );

  const [width, setwidth] = useState(window.innerWidth);
  const [showModal, setShowModal] = useState(false);
  const [infoReserva, setInfoReserva] = useState({ ...getLocalReserva() });

  const dispatch = useDispatch();
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
        const currentUser = await getUserCollection(user.uid);
        dispatch(loginUser(currentUser, { status: false, message: "" }));
      } else {
      }
    });
  }, []);

  useEffect(() => {
    dispatch(getObras({ collectionName: "Obras", key: "", value: "" }));
    dispatch(
      loadTeatrosAsync({ collectionName: "Teatros", key: "", value: "" })
    );
    dispatch(getFilters({ collectionName: "Filtros", key: "", value: "" }));
  }, []);

  return (
    <Appcontext.Provider
      value={{
        filterButton,
        setFilterButton,
        width,
        formatterPeso,
        showModal,
        setShowModal,
        infoReserva,
        setInfoReserva,
        filterInput,
        setFilterInput,
      }}
    >
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<AppStart />} />
          <Route path="/login" element={<SignIn />} />
          <Route path="/home" element={<Inicio />} />
          <Route path="/comunity" element={<Comunity />} />
          <Route path="/favorites" element={<Favorites />} />
          <Route path="/tickets/:id" element={<Reservations />} />
          <Route path="/profile" element={<Perfil />} />
          <Route path="/search" element={<Search />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/register" element={<Register />} />
          <Route path="/detail/:cod" element={<PlayDetail />} />
          <Route path="/photouser" element={<LoadPhotoUser />} />
          <Route path="/noauth" element={<NoAuth />} />
          <Route path="/reservation" element={<Reservas />} />
          <Route path="/confirmreservation/:id" element={<FormReserva />} />
        </Routes>
      </BrowserRouter>
    </Appcontext.Provider>
  );
};

export default Router;
