import React, { useState } from "react";
import "./stylesReservations.scss";
import FooterMenu from "../../components/footerMenu/FooterMenu";
import { BiArrowBack } from "react-icons/bi";
import { useNavigate } from "react-router";
import { HiMinusCircle, HiPlusCircle } from "react-icons/hi";

const Reservations = () => {
  const [cantBoletas, setBoletas] = useState(0);
  const actionBoletas = (op) => {
    if (op === "+") {
      setBoletas(cantBoletas + 1);
    } else if (cantBoletas > 1) {
      setBoletas(cantBoletas - 1);
    } else {
      setBoletas(0);
    }
  };

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
          <HiMinusCircle
            className="arrowLeftReservations"
            onClick={() => {
              actionBoletas("-");
            }}
          />
          <p>{cantBoletas}</p>
          <HiPlusCircle
            className="arrowLeftReservations"
            onClick={() => {
              actionBoletas("+");
            }}
          />
        </div>

        <div className="ticketReservation__Container">
          <div className="ticketReservation">
            <p>Entradas desde</p>
            <button
              className="btnTicket"
              onClick={() => {
                navigate("/confirmreservation");
              }}
            >
              $10.000 COP
            </button>
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
