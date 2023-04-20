import React from "react";
import "./stylesComunity.scss";
import FooterMenu from "../../components/footerMenu/FooterMenu";
import { Carousel } from "react-responsive-carousel";
import ComunityFunc from "../../components/comunityFunc/ComunityFunc";

const Comunity = () => {
  return (
    <main className="secComunity">
      <ComunityFunc />
      <FooterMenu />
    </main>
  );
};

export default Comunity;
