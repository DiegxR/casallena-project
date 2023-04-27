import React, { useState } from "react";
import "./stylesReservations.scss";
import FooterMenu from "../../components/footerMenu/FooterMenu";
import { BiArrowBack } from "react-icons/bi";
import { useNavigate } from "react-router";

import ReservationFunctions from "../../components/ReservationFunctions/ReservationFunctions";

const Reservations = () => {
  const navigate = useNavigate();
  const [currentOpt, setCurrentOpt] = useState(0);

  return (
    <section className="secReservations">
      <div className="arrows arrowsReservation">
        <BiArrowBack onClick={() => navigate(-1)} className="arrowLeft" />
        <p>jue. 17 de agt. 7:00 p. m.</p>
      </div>

      <figure className="seatingImg"></figure>

      <ReservationFunctions opt={currentOpt} />
      <FooterMenu />
    </section>
  );
};

export default Reservations;
