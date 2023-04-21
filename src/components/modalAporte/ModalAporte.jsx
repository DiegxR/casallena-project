import React from "react";
import { motion } from "framer-motion";
import { BiHappyBeaming } from "react-icons/bi";

const ModalAporte = () => {
  return (
    <motion.div className="secModal">
      <article className="secModal__Card">
        <p>
          El aporte voluntario permite que los artistas puedan ingresar a las
          funciones dando un aporte que logre veneficiar al artista y su público
        </p>
        <BiHappyBeaming />
        <button>Comprendo</button>
      </article>
    </motion.div>
  );
};

export default ModalAporte;
