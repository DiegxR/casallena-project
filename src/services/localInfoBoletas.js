export const setLocalReserva = (data) => {
  localStorage.setItem("reserva", JSON.stringify(data));
};
export const getLocalReserva = () => {
  return JSON.parse(localStorage.getItem("reserva")) || {};
};

export const clearLocalReserva = () => {
  localStorage.removeItem("reserva");
};
