import React, { useState } from "react";
import { HiMinusCircle, HiPlusCircle } from "react-icons/hi";
import { useNavigate } from "react-router";
import { AiOutlineArrowLeft } from "react-icons/ai";
import "./reservationFunctions.scss";
import { useContext } from "react";
import { Appcontext } from "../../router/Router";
import { useEffect } from "react";

const ReservationFunctions = ({
  opt = 1,
  set,
  value,
  setPrice,
  price,
  boletas,
  setBoletas,
}) => {
  const { formatterPeso, setInfoReserva } = useContext(Appcontext);

  const navigate = useNavigate();

  const actionBoletas = (op) => {
    if (op === "+") {
      setBoletas(boletas + 1);
    } else if (boletas > 1) {
      setBoletas(boletas - 1);
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
            <p>{boletas}</p>
            <HiPlusCircle
              className="arrowLeftReservations"
              onClick={() => {
                actionBoletas("+");
              }}
            />
          </div>

          {value?.price > 0 ? (
            <div className="ticketReservation__Container">
              <div className="ticketReservation">
                <p>Entradas desde</p>
                <button
                  className="btnTicket"
                  onClick={() => {
                    {
                      boletas !== 0 ? set(1) : "";
                    }
                    setPrice(value.price);
                  }}
                >
                  {formatterPeso.format(value.price)}
                </button>
              </div>
            </div>
          ) : (
            <div className="ticketReservation__Container">
              {[...Array(3)].map((_, index) => (
                <div className="ticketReservation">
                  <p>Entradas desde</p>
                  <button
                    className="btnTicket"
                    onClick={() => {
                      {
                        boletas !== 0 ? set(1) : "";
                      }
                      setPrice(`${index + 1}0000`);
                    }}
                  >
                    {formatterPeso.format(`${index + 1}0000`)}
                  </button>
                </div>
              ))}
            </div>
          )}
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
            <p>
              {boletas} x {formatterPeso.format(price)} COP
            </p>
          </div>
          <button
            onClick={() => {
              navigate(`/confirmreservation/${value.cod}`);
              setInfoReserva({ boletas, price, total: boletas * price });
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
