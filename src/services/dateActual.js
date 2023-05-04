export const getFullDate = () => {
  const fechaActual = new Date();
  const diasDeLaSemana = [
    "Domingo",
    "Lunes",
    "Martes",
    "Miércoles",
    "Jueves",
    "Viernes",
    "Sábado",
  ];
  const meses = [
    "Enero",
    "Febrero",
    "Marzo",
    "Abril",
    "Mayo",
    "Junio",
    "Julio",
    "Agosto",
    "Septiembre",
    "Octubre",
    "Noviembre",
    "Diciembre",
  ];
  const diaDeLaSemana = diasDeLaSemana[fechaActual.getDay()];
  const dia = fechaActual.getDate();
  const mes = meses[fechaActual.getMonth()];
  const año = fechaActual.getFullYear();
  return `${diaDeLaSemana}, ${dia} de ${mes} de ${año}`;
};

export const getShortDate = () => {
  let date = new Date();
  const getDay = date.toLocaleString("default", { day: "2-digit" });
  const getMonth = date.toLocaleString("default", { month: "2-digit" });
  const getYear = date.toLocaleString("default", { year: "numeric" });
  return `${getDay}/${getMonth}/${getYear}`;
};

export const getDateVerification = (date) => {
  const [day, month, year] = date.split("/");
  const dateObject = new Date(year, month - 1, day);
  return dateObject;
};

export const getdate12Hours = (time) => {
  const date = new Date();
  const time24 = time; // hora en formato de 24 horas
  const [hours, minutes] = time24.split(":"); // separar la hora y los minutos
  date.setHours(hours); // establecer las horas en el objeto Date
  date.setMinutes(minutes); // establecer los minutos en el objeto Date
  const time12 = date.toLocaleString("en-US", {
    hour: "numeric",
    minute: "numeric",
    hour12: true,
  });
  return time12;
};
