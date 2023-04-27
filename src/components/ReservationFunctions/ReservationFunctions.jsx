import React, { useState } from "react";
import { HiMinusCircle, HiPlusCircle } from "react-icons/hi";
import { useNavigate } from "react-router";

const ReservationFunctions = ({ opt = 2 }) => {
  const [cantBoletas, setBoletas] = useState(0);
  const [currentOpt, setCurrentOpt] = useState(0);
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
                  navigate("/confirmreservation");
                }}
              >
                $10.000 COP
              </button>
            </div>
          </div>

          <div className="ticketReservation__Container">
            <div className="ticketReservation">
              <p>Entradas desde</p>
              <button
                className="btnTicket"
                onClick={() => {
                  navigate("/confirmreservation");
                  setCurrentOpt(opt == 1);
                }}
              >
                $10.000 COP
              </button>
            </div>
          </div>

          <div className="ticketReservation__Container">
            <div className="ticketReservation">
              <p>Entradas desde</p>
              <button
                className="btnTicket"
                onClick={() => {
                  navigate("/confirmreservation");
                  setCurrentOpt(opt == 1);
                }}
              >
                $10.000 COP
              </button>
            </div>
          </div>
        </div>
      ) : (
        <div className="ReservationFunctions">holi</div>
      )}
    </>
  );
};

export default ReservationFunctions;
