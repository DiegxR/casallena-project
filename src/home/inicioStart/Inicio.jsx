import React, { useContext, useEffect, useRef, useState } from "react";
import "./stylesIncio.scss";
import FooterMenu from "../../components/footerMenu/FooterMenu";
import FilterButtons from "../../components/filtersButtons/FilterButtons";
import Card from "../../components/card/Card";
import { motion } from "framer-motion";
import { Appcontext } from "../../router/Router";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { useSelector } from "react-redux";
import { getCenterSlidePercentage } from "../../services/resizeCarrusel";
import InputFilter from "../../components/inputFilter/InputFilter";
import ModalAporte from "../../components/modalAporte/ModalAporte";
import CardLoading from "../../components/cardLoading/CardLoading";

const Inicio = () => {
  const [sizeCarrusel, setSizeCarrusel] = useState(0);
  const { width, filterButton, showModal, setShowModal } =
    useContext(Appcontext);
  const { obras } = useSelector((store) => store.obras);
  const { user } = useSelector((store) => store.user);

  useEffect(() => {
    let size = getCenterSlidePercentage(width >= 768 ? 600 : 300, width, 1);
    setSizeCarrusel(size);
  }, [width]);
  useEffect(() => {
    console.log(showModal);
  }, [showModal]);
  useEffect(() => {
    console.log(user);
  }, []);

  return (
    <motion.div
      initial={{ opacity: -1 }}
      transition={{ duration: 0.6 }}
      animate={{ opacity: 1 }}
    >
      <ModalAporte isOpen={showModal} Onclose={setShowModal} />
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
              emulateTouch={width < 768 ? true : false}
              showThumbs={false}
              showArrows={width >= 768 ? true : false}
              showStatus={false}
              showIndicators={false}
              centerMode={true}
              centerSlidePercentage={sizeCarrusel}
              interval={3000}
              infiniteLoop={true}
            >
              {obras
                ? obras.map((item, index) => {
                    if (item.score >= 4) {
                      return (
                        <motion.div whileTap={{ scale: 0.9 }} key={index}>
                          <Card type={3} data={item} />
                        </motion.div>
                      );
                    }
                  })
                : [...Array(20)].map(() => (
                    <CardLoading
                      width={width < 768 ? "250px" : "600px"}
                      height={width < 768 ? "200px" : "400px"}
                    />
                  ))}
            </Carousel>
          </section>

          <motion.div className="secInicio__sec2">
            {obras
              ? obras.map((item, index) => (
                  <motion.div
                    style={{ width: `${width < 768 ? "100%" : "330px"}` }}
                    whileHover={{ translateY: -5 }}
                    key={index}
                  >
                    <Card type={2} data={item} />
                  </motion.div>
                ))
              : [...Array(30)].map((item, index) => (
                  <CardLoading
                    key={index}
                    width={width < 768 ? "100%" : "300px"}
                    height={width < 768 ? "184px" : "350px"}
                  />
                ))}
          </motion.div>
        </main>
      )}
      <FooterMenu />
    </motion.div>
  );
};

export default Inicio;
