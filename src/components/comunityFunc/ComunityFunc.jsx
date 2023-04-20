import React from "react";
import { MdVideocam } from "react-icons/md";
import { RiFunctionFill } from "react-icons/ri";
import { BsPersonSquare, BsFillBellFill } from "react-icons/bs";
import "./comunityFunc.scss";

const ComunityFunc = () => {
  return (
    <section className="ComunityFuncSec">
      <div className="ComunityFunc_container">
        <RiFunctionFill className="ComunityFunc_item" />
        <p>Proyectos</p>
      </div>

      <div className="ComunityFunc_container">
        <MdVideocam className="ComunityFunc_item" />
        <p>Ver</p>
      </div>

      <div className="ComunityFunc_container">
        <BsPersonSquare className="ComunityFunc_item" />
        <p>Colecciones</p>
      </div>

      <div className="ComunityFunc_container">
        <BsFillBellFill className="ComunityFunc_item" />
        <p>Anuncios</p>
      </div>
    </section>
  );
};

export default ComunityFunc;
