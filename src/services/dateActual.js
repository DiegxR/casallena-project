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
