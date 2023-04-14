import React, { useEffect, useRef, useState } from "react";
import "./stylesIncio.scss";
import FooterMenu from "../../components/footerMenu/FooterMenu";
import FilterButtons from "../../components/filtersButtons/FilterButtons";
import Card from "../../components/card/Card";
import { motion } from "framer-motion";

const Inicio = () => {
  const [width, setwidth] = useState(0);

  const [cantObras, setCantObras] = useState(10);

  const secObrasCarousel = useRef();
  useEffect(() => {
    const resizeCarrusel = () => {
      setwidth(
        secObrasCarousel.current.scrollWidth -
          secObrasCarousel.current.offsetWidth
      );
    };

    window.addEventListener("resize", resizeCarrusel);
    return () => {
      window.removeEventListener("resize", resizeCarrusel);
    };
  });

  useEffect(() => {}, []);
  useEffect(() => {
    console.log(secObrasCarousel.current.offsetWidth);
  }, [width]);

  return (
    <>
      <main className="secInicio">
        <FilterButtons />
        <motion.div className="CarruselFramer">
          <motion.div
            drag="x"
            ref={secObrasCarousel}
            dragConstraints={{ right: 10, left: -width }}
            className="secObras"
          >
            {[...Array(10)].map((item, index) => (
              <motion.div
                whileHover={{ translateY: -5 }}
                whileTap={{ scale: 0.9 }}
                key={index}
              >
                <Card type={1} />
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
        <section className="secObra">
          <Card type={2} />
        </section>
        <section className="secPopulares">
          <h3 className="tituloPopulares">Proyectos populares</h3>
          <motion.div
            drag="x"
            dragConstraints={{ right: 0, left: -width }}
            className="secPopulares__carousel"
          >
            {[...Array(10)].map((item, index) => (
              <motion.div
                whileHover={{ translateY: -5 }}
                whileTap={{ scale: 0.9 }}
                key={index}
              >
                <Card type={3} />
              </motion.div>
            ))}
          </motion.div>
        </section>
        <section className="secObra">
          <Card type={2} />
        </section>
      </main>
      <FooterMenu />
    </>
  );
};

export default Inicio;
