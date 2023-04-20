import React, { useContext, useEffect, useState } from "react";
import "./stylesFilters.scss";
import Button from "../button/Button";
import { BsFillArrowLeftCircleFill } from "react-icons/bs";
import { Appcontext } from "../../router/Router";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import logo from "../../assets/logo.svg";
import { motion } from "framer-motion";

const FilterButtons = ({ position = 0 }) => {
  const filters = [
    {
      id: 0,
      option: "Aporte voluntario",
      action: "aporte",
    },
    {
      id: 1,
      option: "Hoy",
      action: "hoy",
    },
    {
      id: 2,
      option: "Mañana",
      action: "mañana",
    },
    {
      id: 3,
      option: "Desde 15K",
      action: "15",
    },
    {
      id: 4,
      option: "Desde 30K",
      action: "30",
    },
    {
      id: 5,
      option: "Desde 60K",
      action: "60",
    },
  ];

  const { filterButton, setFilterButton, width } = useContext(Appcontext);
  const [show, setShow] = useState(false);

  const actionFilter = (item) => {
    setFilterButton(item.id);
  };

  useEffect(() => {
    console.log(show);
  }, [show]);

  return (
    <>
      {width >= 768 ? (
        <section className={`secButtonsFilters `}>
          <figure className="logoDesktop">
            <img src={logo} alt="" />
            <figcaption>
              <h2>CasaLlena</h2>
            </figcaption>
          </figure>
          {show ? (
            <motion.div
              initial={{ scale: 0 }}
              animate={{ rotate: 360, scale: 1 }}
              transition={{
                type: "spring",
                stiffness: 260,
                damping: 20,
              }}
              onClick={() => {
                setFilterButton(-1);
                setShow(false);
              }}
              style={{ display: "flex", alignItems: "center" }}
            >
              <BsFillArrowLeftCircleFill className="iconLeft" />
            </motion.div>
          ) : (
            <motion.div
              initial={{ scale: 1 }}
              animate={{ scale: 0 }}
              transition={{ duration: 0.5 }}
            >
              <BsFillArrowLeftCircleFill className="iconLeft" />
            </motion.div>
          )}
          {filters.map((item, index) => (
            <motion.div
              animate={{ x: filterButton !== -1 ? 10 : 0 }}
              key={index}
              whileTap={{ scale: 0.9 }}
            >
              <Button
                children={item.option}
                style={filterButton === item.id ? 2 : 1}
                action={() => {
                  actionFilter(item);
                  setShow(true);
                }}
                width={"145px"}
              />
            </motion.div>
          ))}
        </section>
      ) : (
        <section className="CarruselButtons">
          <figure className="secIconMobile">
            <img src={logo} />
          </figure>
          <section className="secCarrusel">
            <Carousel
              emulateTouch={true}
              showThumbs={false}
              showArrows={false}
              showStatus={false}
              showIndicators={false}
              centerMode={true}
              centerSlidePercentage={width < 524 ? 55 : 40}
              infiniteLoop={false}
            >
              {show ? (
                <section className="secIconSlider">
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{
                      type: "spring",
                      stiffness: 260,
                      damping: 20,
                    }}
                  >
                    <BsFillArrowLeftCircleFill
                      className="iconLeft"
                      onClick={() => {
                        setFilterButton(-1);
                        setShow(false);
                      }}
                    />
                  </motion.div>
                </section>
              ) : (
                <motion.div
                  initial={{ scale: 1 }}
                  animate={{ scale: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <BsFillArrowLeftCircleFill className="iconLeft" />
                </motion.div>
              )}
              {filters.map((item, index) => {
                return (
                  <Button
                    key={index}
                    children={item.option}
                    style={filterButton === item.id ? 2 : 1}
                    width={"150px"}
                    action={() => {
                      actionFilter(item);
                      setShow(true);
                    }}
                  />
                );
              })}
            </Carousel>
          </section>
        </section>
      )}
    </>
  );
};

export default FilterButtons;
