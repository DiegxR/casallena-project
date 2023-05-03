import React from "react";
import FooterMenu from "../../components/footerMenu/FooterMenu";
import CalendarReserv from "../../components/Calendar/CalendarReserv";
import "./Reservas.scss";
import { motion } from "framer-motion";
import { useSelector } from "react-redux";
import { BsFillCalendarCheckFill } from "react-icons/bs";
import { useEffect } from "react";
import { useState } from "react";
import { useContext } from "react";
import { Appcontext } from "../../router/Router";
import ModalReservation from "../../components/modalReservation/ModalReservation";

const Reservas = () => {
  const { user } = useSelector((store) => store.user);
  const [events, setEvents] = useState([]);
  const [currentCod, setCurrentCod] = useState(0);
  const { showModal, setShowModal } = useContext(Appcontext);
  useEffect(() => {
    setEvents([]);
    user.dates.forEach((element) => {
      console.log(element);
      const date = element.currentDate.split("/");
      const month =
        date[1].substring(0, 1) == "0"
          ? Number(date[1].substring(1))
          : Number(date[1]);
      console.log(date, month);
      const hourStart = element.currentHour.split(":");
      const hourEnd = element.currentHourEnd.split(":");
      const event = {
        title: element.name,
        start: new Date(
          Number(date[2]),
          month - 1,
          Number(date[0]),
          Number(hourStart[0]),
          Number(hourStart[1])
        ),
        end: new Date(
          Number(date[2]),
          month - 1,
          Number(date[0]),
          Number(hourEnd[0]),
          Number(hourEnd[1])
        ),
        color: "#d80416",
        cod: element.cod,
      };
      setEvents((ev) => [...ev, event]);
    });
  }, [user]);

  return (
    <motion.div
      initial={{ opacity: -1 }}
      transition={{ duration: 1 }}
      animate={{ opacity: 1 }}
      className="secReserv"
    >
      <header className="secReserv_head">
        <BsFillCalendarCheckFill className="secReserv_headicon" />
        <h2>Tus Reservas</h2>
      </header>
      <section className="secReserv_calendar">
        <CalendarReserv
          eventos={events}
          set={setShowModal}
          setCod={setCurrentCod}
        />
      </section>
      <FooterMenu />
      {showModal ? <ModalReservation opt={currentCod} /> : ""}
    </motion.div>
  );
};

export default Reservas;
