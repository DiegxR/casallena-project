import React from "react";
import "./stylesIncio.scss";
import FooterMenu from "../../components/footerMenu/FooterMenu";
import FilterButtons from "../../components/filtersButtons/FilterButtons";

const Inicio = () => {
  return (
    <main className="secInicio">
      <FilterButtons />
      <FooterMenu />
    </main>
  );
};

export default Inicio;
