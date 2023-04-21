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

const Inicio = () => {
  const { width, filterButton } = useContext(Appcontext);
  const { user } = useSelector((store) => store.user);
  const { obras } = useSelector((store) => store.obras);
  useEffect(() => {
    Swal.fire({ 
      title: `Bienvenido ${user.name}`,
      color: '#fff',
    background: '#0d1314',
      confirmButtonColor: '#d80416',
      confirmButtonText: 'Continuar'})
  }, [])
  
  useEffect(() => {
    console.log(width);
  }, [width]);
  
  return (
    <motion.div
    initial={{opacity: -1}}
    transition={{duration: 0.6}}
    animate={{opacity: 1}}
    >
      <section className="navbarSticky">
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
                width={"100%"}
              >
                {obras ? (
                  obras.map((item, index) => {
                    if (item.price > 0) {
                      return (
                        <motion.div
                          whileTap={{ scale: 0.9 }}
                          key={index}
                          className={"itemSlider"}
                        >
                          <Card type={1} data={item} />
                        </motion.div>
                      );
                    }
                  })
                ) : (
                  <></>
                )}
              </Carousel>
            </section>
          </section>

          <motion.div className="secInicio__sec2">
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
                  ? 60
                  : width >= 992 && width <= 1515
                  ? 40
                  : width >= 1800
                  ? 20
                  : 25
              }
              autoPlay={width >= 768 ? true : false}
              interval={3000}
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
        </main>
      )}
      <FooterMenu />
    </motion.div>
  );
};

export default Inicio;
