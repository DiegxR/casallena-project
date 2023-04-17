export const teatros = [
  {
    id: 0,
    name: "Pequeño teatro",
    location: { lat: "", long: "" },
    salas: [
      {
        id: 0,
        cantTotal: 50,
        cantDisp: 50,
        cantOcupados: 0,
      },
    ],
  },
];

export const obras = [
  {
    id: 0,
    name: "A la diestra de Dios Padre",
    description:
      "Una adaptación del cuento En la diestra de dios padre de Tomas Carrasquilla.",
    info: "Respresentada desde 2002. Narra la historia de Peralta, un campesino a quien se le aparecen Jesús y San Pedro para retribuirle su generosidad con la gente de su pueblo.",
    aviso:
      "El uso del tapacocas tanto dentro como fuera de la sala no es obligatorio.Recuerda llegar al teatro con un mínimo de 15 minutos antes de la funsión.",
    img: "",
    dates: ["13/04/2023"],
    desc: [
      { id: 0, type: 0, percent: 50, have: true },
      { id: 1, type: 1, percent: 60, have: false },
      { id: 1, type: 2, percent: 80, have: false },
    ],
    price: {
      type: 0,
      price: 30000,
    },
    theater: 0,
    sala: 0,
  },
];
