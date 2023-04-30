import React, { useContext, useEffect, useState } from "react";
import "./stylesinput.scss";
import { BiSearchAlt2 } from "react-icons/bi";
import { useDispatch } from "react-redux";
import { filterSearchObras, getObras } from "../../redux/actions/obrasActions";
import { Appcontext } from "../../router/Router";

const InputFilter = () => {
  const { filterInput, setFilterInput } = useContext(Appcontext);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(filterSearchObras(filterInput));
  }, [filterInput]);

  return (
    <section className="secInputFilter">
      <BiSearchAlt2 className="iconInput" />
      <input
        onInput={(e) => setFilterInput(e.target.value)}
        type="text"
        placeholder="Buscar teatro"
        value={filterInput}
      />
    </section>
  );
};

export default InputFilter;
