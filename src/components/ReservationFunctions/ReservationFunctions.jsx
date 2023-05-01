import React, { useState } from "react";
import { HiMinusCircle, HiPlusCircle } from "react-icons/hi";
import { useNavigate } from "react-router";
import { AiOutlineArrowLeft } from "react-icons/ai";
import "./reservationFunctions.scss";
import { useContext } from "react";
import { Appcontext } from "../../router/Router";
import { useEffect } from "react";
import { setLocalReserva } from "../../services/localInfoBoletas";
import { motion } from 'framer-motion'
const ReservationFunctions = ({
  opt = 1,
  set,
  value,
  setPrice,
  price,
  boletas,
  setBoletas,
}) => {
  const { formatterPeso, setInfoReserva, infoReserva } = useContext(Appcontext);
  const [currentDate, setCurrentDate] = useState(infoReserva.currentDate);
  const [animate, setanimate] = useState(false)
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
  useEffect(() => {
    console.log(currentDate);
  }, []);
  const handleSelectChange = (event) => {
    console.log("Entro");
    if (event.target.value) {
      setCurrentDate(event.target.value);
    }
  };
  useEffect(() => {
    console.log(currentDate);
  }, [currentDate]);

  return (
    <>
      {opt === 0 ? (
        <motion.div
          animate={animate ? { opacity: -1 } : ''}
          transition={{ duration: 0.5 }}
          className="ReservationFunctions">
          <div
            className="selectSec">
            <h3>Escoge la fecha de la función</h3>

            <select
              onChange={handleSelectChange}
              value={currentDate}
              className="select"
            >
              {value?.dates.map((item, index) =>
                item.aforo >= boletas ? (
                  <option key={index} value={item.date}>
                    {item.date}
                  </option>
                ) : (
                  <></>
                )
              )}
            </select>
          </div>
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
                  className={`${boletas !== 0 && currentDate !== ""
                      ? "btnTicket"
                      : "btnTicketDisabled "
                    }`}
                  onClick={() => {
                    {
                      boletas !== 0 && currentDate !== "" ? (setTimeout(() => { set(1) }, 500), setanimate(true)) : "";
                    }
                    setPrice(value.price);
                  }}
                >
                  {formatterPeso.format(value.price)}
                </button>
              </div>
            </div>
          ) : (
            <div
              className="ticketReservation__Container">
              {[...Array(3)].map((_, index) => (
                <div className="ticketReservation">
                  <p key={index + 1}>Entradas desde</p>
                  <button
                    key={index}
                    className={`${boletas !== 0 && currentDate !== ""
                        ? "btnTicket"
                        : "btnTicketDisabled "
                      }`}
                    onClick={() => {
                      {
                        boletas !== 0 && currentDate !== "" ? (setTimeout(() => { set(1) }, 500), setanimate(true)) : "";
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

        </motion.div>
      ) : (
        <motion.div
          initial={{ opacity: 0 }}
          transition={{ duration: 0.9 }}
          animate={{ opacity: 1 }}
          className="ReservationFunctions">
          <AiOutlineArrowLeft
            onClick={() => (set(0), setanimate(false))}
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
              setInfoReserva({
                boletas,
                price,
                currentDate,
                total: boletas * price,
                cod: value.cod, 
                name: value.name
              });
              setLocalReserva({
                boletas,
                price,
                currentDate,
                total: boletas * price,
                cod: value.cod,
                name: value.name
              });
            }}
            className="registerSec__btn btn_reservation"
          >
            Continuar
          </button>
        </motion.div>
      )}
    </>
  );
};

export default ReservationFunctions;
