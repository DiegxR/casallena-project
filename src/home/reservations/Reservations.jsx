import React from "react";
import "./stylesReservations.scss";
import FooterMenu from "../../components/footerMenu/FooterMenu";
import { BiArrowBack } from "react-icons/bi";
import { useNavigate } from "react-router";
import { HiMinusCircle, HiPlusCircle } from "react-icons/hi";

const Reservations = () => {
  const navigate = useNavigate();
  return (
    <section className="secReservations">
      <div className="arrows arrowsReservation">
        <BiArrowBack onClick={() => navigate(-1)} className="arrowLeft" />
        <p>jue. 17 de agt. 7:00 p. m.</p>
      </div>
      <figure className="seatingImg"></figure>
      <div className="ReservationFunctions">
        <div className="ReservationIcon">
          <HiMinusCircle className="arrowLeftReservations" />
          <p>1 entrada</p>
          <HiPlusCircle className="arrowLeftReservations" />
        </div>

        <div className="ticketReservation__Container">
          <div className="ticketReservation">
            <p>Entradas desde</p>
            <button className="btnTicket">$10.000 COP</button>
          </div>

          <div className="ticketReservation">
            <p>Entradas desde</p>
            <button className="btnTicket">$10.000 COP</button>
          </div>

          <div className="ticketReservation">
            <p>Entradas desde</p>
            <button className="btnTicket">$10.000 COP</button>
          </div>
        </div>
      </div>
      <FooterMenu />
    </section>
  );
};

export default Reservations;
