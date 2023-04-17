import React, { useContext, useEffect, useRef, useState } from "react";
import "./stylesIncio.scss";
import FooterMenu from "../../components/footerMenu/FooterMenu";
import FilterButtons from "../../components/filtersButtons/FilterButtons";
import Card from "../../components/card/Card";
import { motion } from "framer-motion";
import { Appcontext } from "../../router/Router";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const Inicio = () => {
  const secObrasCarousel = useRef();
  const { width, filterButton } = useContext(Appcontext);

  useEffect(() => {
    console.log(width);
  }, [width]);

  return (
    <>
      <section className="navbarSticky">
        <FilterButtons />
      </section>

      {filterButton !== -1 ? (
        <section className="secFilter"></section>
      ) : (
        <main className="secInicio">
          <section className="secInicio__sec1">
            <section className="slider">
              <Carousel
                emulateTouch={true}
                showThumbs={false}
                showArrows={false}
                showStatus={false}
                showIndicators={false}
                centerMode={width < 768 ? true : false}
                centerSlidePercentage={
                  width <= 564 ? 90 : width <= 760 && width >= 653 ? 55 : 58
                }
                autoPlay={width >= 768 ? true : false}
                interval={3000}
              >
                {[...Array(10)].map((item, index) => (
                  <motion.div
                    whileTap={{ scale: 0.9 }}
                    key={index}
                    className={"itemSlider"}
                  >
                    <Card type={1} />
                  </motion.div>
                ))}
              </Carousel>
            </section>
          </section>

          <motion.div className="secInicio__sec2">
            {[...Array(12)].map((item, index) => (
              <motion.div
                style={{ width: `${width < 768 ? "100%" : "330px"}` }}
                whileHover={{ translateY: -5 }}
                whileTap={{ scale: 0.9 }}
                key={index}
              >
                <Card type={2} />
              </motion.div>
            ))}
          </motion.div>

          <section className="secInicio__sec3">
            <h3>Proyectos populares</h3>
            <Carousel
              emulateTouch={true}
              showThumbs={false}
              showArrows={false}
              showStatus={false}
              showIndicators={false}
              centerMode={true}
              centerSlidePercentage={
                width <= 768
                  ? 45
                  : width >= 992 && width <= 1515
                  ? 40
                  : width >= 1800
                  ? 20
                  : 25
              }
              autoPlay={width >= 768 ? true : false}
              interval={3000}
            >
              {[...Array(10)].map((item, index) => (
                <motion.div whileTap={{ scale: 0.9 }} key={index}>
                  <Card type={3} />
                </motion.div>
              ))}
            </Carousel>
          </section>
        </main>
      )}
      <FooterMenu />
    </>
  );
};

export default Inicio;
