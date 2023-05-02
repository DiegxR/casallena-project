import React, { useContext, useState } from "react";
import "./stylesReservations.scss";
import FooterMenu from "../../components/footerMenu/FooterMenu";
import { BiArrowBack } from "react-icons/bi";
import { useNavigate, useParams } from "react-router";
import ReservationFunctions from "../../components/ReservationFunctions/ReservationFunctions";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { getFullDate } from "../../services/dateActual";
import {
  clearLocalReserva,
  getLocalReserva,
} from "../../services/localInfoBoletas";
import { Appcontext } from "../../router/Router";
import { motion } from "framer-motion";
const Reservations = () => {
  const navigate = useNavigate();
  const localReserva = getLocalReserva();
  const [currentOpt, setCurrentOpt] = useState(0);
  const [currentPrice, setCurrentPrice] = useState(
    localReserva.price ? localReserva.price : 0
  );
  const [currentObra, setCurrentObra] = useState([]);
  const [cantBoletas, setCantBoletas] = useState(
    localReserva.boletas ? localReserva.boletas : 0
  );
  const { id } = useParams();
  const { obras } = useSelector((store) => store.obras);
  const { setInfoReserva } = useContext(Appcontext);
  useEffect(() => {
    setCurrentObra(obras.filter((item) => item.cod === Number(id)));
  }, [obras]);
  useEffect(() => {
    setInfoReserva({ ...getLocalReserva() });
  }, []);

  return (
    <motion.section
      initial={{ y: "100%" }}
      transition={{ duration: 1 }}
      animate={{ y: "0%" }}
      className="secReservations"
    >
      <div className="arrows arrowsReservation">
        <BiArrowBack
          onClick={() => {
            navigate(-1);
            clearLocalReserva();
          }}
          className="arrowLeft"
        />
        <p>{getFullDate()}</p>
      </div>

      <figure className="seatingImg"></figure>

      <ReservationFunctions
        opt={currentOpt}
        set={setCurrentOpt}
        value={currentObra[0]}
        setPrice={setCurrentPrice}
        boletas={cantBoletas}
        price={currentPrice}
        setBoletas={setCantBoletas}
      />
    </motion.section>
  );
};

export default Reservations;
