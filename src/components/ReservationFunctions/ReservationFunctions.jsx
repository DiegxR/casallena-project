import React, { useState } from "react";
import { HiMinusCircle, HiPlusCircle } from "react-icons/hi";
import { useNavigate } from "react-router";
import { AiOutlineArrowLeft } from "react-icons/ai";
import "./reservationFunctions.scss";
import { useContext } from "react";
import { Appcontext } from "../../router/Router";
import { useEffect } from "react";
import { setLocalReserva } from "../../services/localInfoBoletas";
import { motion } from "framer-motion";
import { getDateVerification, getShortDate } from "../../services/dateActual";
import { useSelector } from "react-redux";
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
  const { teatros } = useSelector((store) => store.teatros);
  const [teatro, setTeatro] = useState([]);
  const [currentDate, setCurrentDate] = useState("");
  const [currentHour, setCurrentHour] = useState("");
  const [currentHourEnd, setCurrentHourEnd] = useState("");
  const [dates, setDates] = useState([]);
  const [animate, setanimate] = useState(false);
  const navigate = useNavigate();

  const actionBoletas = (op) => {
    if (dates.length !== 0) {
      if (op === "+") {
        setBoletas(boletas + 1);
      } else if (boletas > 1) {
        setBoletas(boletas - 1);
      } else {
        setBoletas(0);
      }
    } else {
      setBoletas(0);
    }
  };

  const dateDisponibles = (array) => {
    let newdates = [];
    let today = new Date();
    array.forEach((item) => {
      let fecha = getDateVerification(item.date);
      if (fecha.getTime() >= today.getTime()) {
        if (item.aforo >= boletas) {
          newdates.push(item.date);
        }
      }
    });
    setDates(newdates);
  };

  const changeCurrentDate = () => {
    if (dates.length !== 0) {
      setCurrentDate(dates[0]);
      if (value?.dates) {
        const array = value.dates.filter((item) => item.date === dates[0]);
        if (array) {
          setCurrentHour(array[0].hourStart);
          setCurrentHourEnd(array[0].hourEnd);
        }
      }
    } else {
      if (infoReserva?.currentDate) {
        setCurrentDate(infoReserva.currentDate);
        setCurrentDate(infoReserva.currentHour);
        setCurrentDate(infoReserva.currentHourEnd);
      } else {
        setCurrentDate(dates[0]);
        if (value?.dates) {
          const array = value.dates.filter((item) => item.date === dates[0]);
          if (array) {
            setCurrentHour(array[0].hourStart);
            setCurrentHourEnd(array[0].hourEnd);
          }
        }
      }
    }
  };

  useEffect(() => {
    if (value?.dates) {
      dateDisponibles(value.dates);
    }
  }, [value, boletas]);
  useEffect(() => {
    changeCurrentDate();
  }, [dates]);

  const handleSelectChange = (event) => {
    if (event.target.value) {
      setCurrentDate(event.target.value.date);
      setCurrentHour(event.target.value.hourStart);
    }
  };

  useEffect(() => {
    if (teatros.length !== 0) {
      if (value?.cod) {
        setTeatro(
          teatros.filter((item) => item.cod === value.dates[0].theater)
        );
      }
    }
  }, [value, teatros]);

  return (
    <>
      {opt === 0 ? (
        <motion.div
          animate={animate ? { opacity: -1 } : ""}
          transition={{ duration: 0.5 }}
          className="ReservationFunctions"
        >
          <div className="selectSec">
            <h3>Escoge la fecha de la función</h3>

            {dates.length !== 0 ? (
              <select
                onChange={handleSelectChange}
                value={currentDate}
                className="select"
              >
                {dates.map((item, index) => (
                  <option key={index} value={item}>
                    {item}
                  </option>
                ))}
              </select>
            ) : (
              <p style={{ textAlign: "center" }}>Sin fechas disponibles</p>
            )}
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
                  className={`${
                    boletas !== 0 && currentDate !== "" && dates.length !== 0
                      ? "btnTicket"
                      : "btnTicketDisabled "
                  }`}
                  onClick={() => {
                    {
                      boletas !== 0 && currentDate !== "" && dates.length !== 0
                        ? (setTimeout(() => {
                            set(1);
                          }, 500),
                          setanimate(true))
                        : "";
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
                  <p key={index + 1}>Entradas desde</p>
                  <button
                    key={index}
                    className={`${
                      boletas !== 0 && currentDate !== "" && dates.length !== 0
                        ? "btnTicket"
                        : "btnTicketDisabled "
                    }`}
                    onClick={() => {
                      {
                        boletas !== 0 &&
                        currentDate !== "" &&
                        dates.length !== 0
                          ? (setTimeout(() => {
                              set(1);
                            }, 500),
                            setanimate(true))
                          : "";
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
          className="ReservationFunctions "
        >
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
                currentHour,
                currentHourEnd,
                total: boletas * price,
                cod: value.cod,
                name: value.name,
                img: value.img,
                teatro: teatro[0]?.name,
                direccion: teatro[0]?.direccion,
              });
              setLocalReserva({
                boletas,
                price,
                currentDate,
                currentHour,
                currentHourEnd,
                total: boletas * price,
                cod: value.cod,
                name: value.name,
                img: value.img,
                teatro: teatro[0]?.name,
                direccion: teatro[0]?.direccion,
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
