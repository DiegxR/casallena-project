import React, { useState } from "react";
import { HiMinusCircle, HiPlusCircle } from "react-icons/hi";
import { useNavigate } from "react-router";
import { AiOutlineArrowLeft } from "react-icons/ai";
import "./reservationFunctions.scss";

const ReservationFunctions = ({ opt = 1, set }) => {
  const [cantBoletas, setBoletas] = useState(0);
  const navigate = useNavigate();

  const actionBoletas = (op) => {
    if (op === "+") {
      setBoletas(cantBoletas + 1);
    } else if (cantBoletas > 1) {
      setBoletas(cantBoletas - 1);
    } else {
      setBoletas(0);
    }
  };

  return (
    <>
      {opt === 0 ? (
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
                  set(1);
                }}
              >
                $10.000 COP
              </button>
            </div>
          </div>
        </div>
      ) : (
        <div className="ReservationFunctions">
          <AiOutlineArrowLeft
            onClick={() => set(0)}
            className=" arrowReservation"
          />
          <h3>Entradas</h3>
          <div className="reservationPrice">
            <p>Precio</p>
            <p>2 x $20.000 COP</p>
          </div>
          <button
            onClick={() => {
              navigate("/confirmreservation");
            }}
            className="registerSec__btn btn_reservation"
          >
            Continuar
          </button>
        </div>
      )}
    </>
  );
};

export default ReservationFunctions;
