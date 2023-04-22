import React, { useContext, useEffect, useRef, useState } from "react";
import "./stylesIncio.scss";
import FooterMenu from "../../components/footerMenu/FooterMenu";
import FilterButtons from "../../components/filtersButtons/FilterButtons";
import Card from "../../components/card/Card";
import { motion } from "framer-motion";
import { Appcontext } from "../../router/Router";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import Swal from "sweetalert2";
import { getCenterSlidePercentage } from "../../services/resizeCarrusel";
import InputFilter from "../../components/inputFilter/InputFilter";

const Inicio = () => {
  const [sizeCarrusel, setSizeCarrusel] = useState(0);
  const { width, filterButton } = useContext(Appcontext);
  const { obras } = useSelector((store) => store.obras);
 
  useEffect(() => {
    let size = getCenterSlidePercentage(width >= 768 ? 600 : 300, width, 1);
    setSizeCarrusel(size);
  }, [width]);

  return (
    <motion.div
    initial={{opacity: -1}}
    transition={{duration: 0.6}}
    animate={{opacity: 1}}
    >
      <section className="navbarSticky">
        <InputFilter />
        <FilterButtons />
      </section>

      {filterButton !== -1 ? (
        <motion.div className="secFilter">
          {obras ? (
            obras.map((item, index) => (
              <motion.div
                style={{ width: `${width < 768 ? "100%" : "330px"}` }}
                whileHover={{ translateY: -5 }}
                whileTap={{ scale: 0.9 }}
                key={index}
              >
                <Card type={2} data={item} />
              </motion.div>
            ))
          ) : (
            <></>
          )}
        </motion.div>
      ) : (
        <main className="secInicio">
          <section className="secInicio__sec1">
            <h3>Proyectos populares</h3>
            <Carousel
              emulateTouch={true}
              showThumbs={false}
              showArrows={false}
              showStatus={false}
              showIndicators={false}
              centerMode={true}
              centerSlidePercentage={sizeCarrusel}
              interval={3000}
              infiniteLoop={true}
            >
              {obras ? (
                obras.map((item, index) => {
                  if (item.score >= 4) {
                    return (
                      <motion.div whileTap={{ scale: 0.9 }} key={index}>
                        <Card type={3} data={item} />
                      </motion.div>
                    );
                  }
                })
              ) : (
                <></>
              )}
            </Carousel>
          </section>

          <motion.div className="secInicio__sec2">
            {obras ? (
              obras.map((item, index) => (
                <motion.div
                  style={{ width: `${width < 768 ? "100%" : "330px"}` }}
                  whileHover={{ translateY: -5 }}
                  key={index}
                >
                  <Card type={2} data={item} />
                </motion.div>
              ))
            ) : (
              <></>
            )}
          </motion.div>
        </main>
      )}
      <FooterMenu />
    </motion.div>
  );
};

export default Inicio;
