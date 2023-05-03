import { React, useState } from "react";
import "./stylessecLoading.scss";
import { motion } from "framer-motion";
import { useEffect } from "react";
import logo from "../../assets/logo.svg";

const SecLoading = () => {
  const [isAnimating, setIsAnimating] = useState(true);

  useEffect(() => {
    setTimeout(() => setIsAnimating(false), 5000);
  }, []);
  return (
    <section className="secLoading">
      <figure>
        <motion.div
          className="secImgLoading"
          initial={{ opacity: 0 }}
          animate={{ opacity: isAnimating ? 1 : 0 }}
          exit={{ opacity: 1 }}
          transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
        >
          <img src={logo} alt="" />
        </motion.div>

        <figcaption>
          <span>Cargando...</span>
        </figcaption>
      </figure>
    </section>
  );
};

export default SecLoading;
