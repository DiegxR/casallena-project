import { React, useContext } from "react";
import { motion } from "framer-motion";
import { BiHappyBeaming } from "react-icons/bi";
import "./styleModalAporte.scss";
import { Appcontext } from "../../router/Router";

const ModalAporte = () => {
  const { showModal, setShowModal } = useContext(Appcontext);
  const animation = {
    hidden: { opacity: 0, y: "-100%" },
    visible: { opacity: 1, y: "0%" },
  };

  return (
    <motion.div
      className={`secModal `}
      initial="hidden"
      animate={showModal ? "visible" : "hidden"}
      variants={animation}
      transition={{ duration: 0.3 }}
      id="modalAporte"
    >
      <article className="secModal__Card">
        <p>Este aporte permite disfrutar el arte sin una tarifa estricta</p>
        <BiHappyBeaming className="icon" />
        <button
          onClick={() => {
            setShowModal(false);
          }}
        >
          Comprendo
        </button>
      </article>
    </motion.div>
  );
};

export default ModalAporte;
