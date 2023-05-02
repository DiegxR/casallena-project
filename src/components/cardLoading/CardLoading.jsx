import React, { useState } from "react";
import "./stylesCardLoading.scss";
import logo from "../../assets/logo.svg";
import { motion } from "framer-motion";
import { useEffect } from "react";

const CardLoading = ({ width, height }) => {
  const [isAnimating, setIsAnimating] = useState(true);

  useEffect(() => {
    setTimeout(() => setIsAnimating(false), 5000);
  }, []);
  return (
    <section
      style={{ width: `${width}`, height: `${height}` }}
      className="cardLoading"
    >
      <motion.div
        className="secImgLoading"
        initial={{ opacity: 0 }}
        animate={{ opacity: isAnimating ? 1 : 0 }}
        exit={{ opacity: 1 }}
        transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
      >
        <img src={logo} alt="" className="logoLoading" />
      </motion.div>
      <figcaption>
        <p>Cargando...</p>
      </figcaption>
    </section>
  );
};

export default CardLoading;
