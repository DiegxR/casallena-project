import React, { useState } from "react";
import { BiArrowBack } from "react-icons/bi";
import { GiShare } from "react-icons/gi";
import DetailObra from "../../components/detailObra/DetailObra";
import "./playDetail.scss";

const PlayDetail = () => {
  const [currentOpt, setCurrentOpt] = useState(0);
  const [currentInfo, setCurrentInfo] = useState({
    id: 0,
    name: "Datos",
    description:
      "Una adaptación del cuento En la diestra de dios padre de Tomas Carrasquilla.",
    img: [
      "https://www.elcorteingles.es/entradas/blog/wp-content/uploads/2020/05/G%C3%A9neros-teatrales.jpg",
      "https://humanidades.com/wp-content/uploads/2018/10/teatro-5-e1583803340193.jpg",
      "https://cba.ucb.edu.bo/blog/wp-content/uploads/2021/04/dos-hombres-mujeres-mimo-artista-mirando-traves-cortina-roja_23-2147891618.jpg",
    ],
    duration: 105,
    date: "13/06/23",
    gendre: "Dramático",
    age: 0,
  });

  const arrayinfo = [
    {
      id: 0,
      name: "A la diestra de Dios Padre",
      data: [
        {
          id: 0,
          name: "Datos",
          description:
            "Una adaptación del cuento En la diestra de dios padre de Tomas Carrasquilla.",
          img: [
            "https://www.elcorteingles.es/entradas/blog/wp-content/uploads/2020/05/G%C3%A9neros-teatrales.jpg",
            "https://humanidades.com/wp-content/uploads/2018/10/teatro-5-e1583803340193.jpg",
            "https://cba.ucb.edu.bo/blog/wp-content/uploads/2021/04/dos-hombres-mujeres-mimo-artista-mirando-traves-cortina-roja_23-2147891618.jpg",
          ],
          duration: 105,
          date: "13/06/23",
          gendre: "Dramático",
          age: 0,
        },
        {
          id: 1,
          name: "Lugar",
          location: { lat: "", long: "" },
          direccion: "Carrera 49 #45-67",
        },
        {
          id: 2,
          name: "Avisos",
          infoPublico:
            "El uso del tapacocas tanto dentro como fuera de la sala no es obligatorio.",
          infoTeatro:
            "Recuerda llegar al teatro con un mínimo de 15 minutos antes de la funsión.",
        },
      ],

      info: "Respresentada desde 2002. Narra la historia de Peralta, un campesino a quien se le aparecen Jesús y San Pedro para retribuirle su generosidad con la gente de su pueblo.",
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

  return (
    <section className="PlayDetailSec">
      <div className="arrows">
        <BiArrowBack className="arrowLeft" />
        <GiShare className="arrowLeft" />
      </div>

      <div className="playDetailContainer">
        <div className="playDetail">
          <img
            src="https://image.tmdb.org/t/p/w342/gY9VKCIDLzFzlhPPJ127OjaP1jA.jpg"
            alt=""
            className="playDetail_img"
          />
          <div className="playDetail_txt">
            <p className="pDiscount">50% estudiantes</p>
            <h1>El cadáver</h1>
            <p>
              El teatro físico, el grotesco y un poco de humor son los recursos
              expresivos que dan cuerpo a El Cadáver.
            </p>
          </div>
        </div>

        <div className="dataContainer">
          <div className="data_options">
            {arrayinfo[0].data.map((item, index) => (
              <section
                key={index}
                className={`data_title`}
                onClick={() => {
                  setCurrentOpt(item.id);
                  setCurrentInfo(item);
                }}
              >
                <h3>{item.name}</h3>
                <div
                  className={`rectangle ${
                    currentOpt === item.id ? "" : "hideRectangle"
                  }`}
                ></div>
              </section>
            ))}
          </div>
          <hr />
          <DetailObra op={currentOpt} info={currentInfo} />
        </div>
      </div>
      <div className="reservation">
        <p>No te quedes afuera</p>
        <button className="registerSec__btn">RESERVAR AHORA</button>
      </div>
    </section>
  );
};

export default PlayDetail;
