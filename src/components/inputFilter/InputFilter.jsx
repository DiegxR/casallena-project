import React, { useEffect, useState } from "react";
import "./stylesinput.scss";
import { BiSearchAlt2 } from "react-icons/bi";
import { useDispatch } from "react-redux";
import { filterSearchObras, getObras } from "../../redux/actions/obrasActions";

const InputFilter = () => {
  const [filter, setFilter] = useState('')
  const dispatch = useDispatch()
  useEffect(() => {
  
    dispatch(filterSearchObras(filter))
   console.log(filter)
  }, [filter])
  
  return (
    <section className="secInputFilter">
      <BiSearchAlt2 className="iconInput" />
      <input onInput={(e)=> setFilter(e.target.value)} type="text" placeholder="Buscar teatro" />
    </section>
  );
};

export default InputFilter;
