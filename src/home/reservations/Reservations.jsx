import React, { useState } from "react";
import "./stylesReservations.scss";
import FooterMenu from "../../components/footerMenu/FooterMenu";
import { BiArrowBack } from "react-icons/bi";
import { useNavigate, useParams } from "react-router";
import ReservationFunctions from "../../components/ReservationFunctions/ReservationFunctions";
import { useSelector } from "react-redux";
import { useEffect } from "react";

const Reservations = () => {
  const navigate = useNavigate();
  const [currentOpt, setCurrentOpt] = useState(0);
  const [currentPrice, setCurrentPrice] = useState(0);
  const [currentObra, setCurrentObra] = useState([]);
  const [cantBoletas, setCantBoletas] = useState(0);
  const { id } = useParams();
  const { obras } = useSelector((store) => store.obras);
  useEffect(() => {
    setCurrentObra(obras.filter((item) => item.cod === Number(id)));
  }, [obras]);

  return (
    <section className="secReservations">
      <div className="arrows arrowsReservation">
        <BiArrowBack onClick={() => navigate(-1)} className="arrowLeft" />
        <p>jue. 17 de agt. 7:00 p. m.</p>
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
    </section>
  );
};

export default Reservations;
