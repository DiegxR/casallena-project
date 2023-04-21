import React from "react";
import "./stylesinput.scss";
import { BiSearchAlt2 } from "react-icons/bi";

const InputFilter = () => {
  return (
    <section className="secInputFilter">
      <BiSearchAlt2 className="iconInput" />
      <input type="text" placeholder="Buscar teatro" />
    </section>
  );
};

export default InputFilter;
