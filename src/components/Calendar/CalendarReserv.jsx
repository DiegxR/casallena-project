import React from "react";
import { Calendar, momentLocalizer } from "react-big-calendar";
import "react-big-calendar/lib/css/react-big-calendar.css";
import moment from "moment";
import "moment/locale/es";
moment.locale("es");
import "./CalendarReserv.scss";
import { useNavigate } from "react-router";
const CalendarReserv = ({ eventos, set, setCod }) => {
  const localizer = momentLocalizer(moment);
  const eventStyleGetter = (event, start, end, isSelected) => {
    const backgroundColor = "#D80416";
    const style = {
      backgroundColor,
      borderRadius: "12px",
      opacity: 0.8,
      color: "white",
      border: "0px",
      display: "block",
    };
    return {
      style,
    };
  };
  function dayPropGetter(date) {
    return {
      style: {
        background: "transparent",
        width: "500px",
      },
    };
  }
  const handleClick = (e) => {
    set(true);
    setCod(e.cod);
  };
  return (
    <div className="calendar">
      <Calendar
        localizer={localizer}
        events={eventos}
        toolbar={true}
        startAccessor="start"
        endAccessor="end"
        dayPropGetter={dayPropGetter}
        eventPropGetter={eventStyleGetter}
        onSelectEvent={handleClick}
        selectable={false}
        views={["month", "week"]}
        components={{
          month: {
            dateHeader: ({ label }) => (
              <span style={{ fontWeight: "bold" }}>{label}</span>
            ),
          },
        }}
        dayLayoutAlgorithm="no-overlap"
        messages={{
          allDay: "Todo el día",
          previous: "Anterior",
          next: "Siguiente",
          today: "Hoy",
          month: "Mes",
          week: "Semana",
          day: "Día",
          agenda: "Agenda",
          date: "Fecha",
          time: "Hora",
          event: "Evento",
        }}
      />
    </div>
  );
};

export default CalendarReserv;
