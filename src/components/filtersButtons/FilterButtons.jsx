import React, { useContext, useState, useEffect } from "react";
import { useSelector } from "react-redux";
import "./stylesFilters.scss";
import Button from "../button/Button";
import { BsFillArrowLeftCircleFill } from "react-icons/bs";
import { Appcontext } from "../../router/Router";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import logo from "../../assets/logo.svg";
import { motion } from "framer-motion";
import { getCenterSlidePercentage } from "../../services/resizeCarrusel";

const FilterButtons = ({ position = 0 }) => {
  const { filterButton, setFilterButton, width } = useContext(Appcontext);

  const { filters } = useSelector((store) => store.obras);
  const [show, setShow] = useState(false);
  const [background, setBackground] = useState("#0d1314");
  const [resize, setResize] = useState(100);

  const actionFilter = (item) => {
    setFilterButton(item.id);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleScroll = () => {
    const menu = document.getElementById("menuFilters");
    if (window.scrollY > menu.offsetHeight) {
      menu.classList.add("backgroundScroll");
    } else {
      menu.classList.remove("backgroundScroll");
    }
  };
  useEffect(() => {
    const size = getCenterSlidePercentage(150, width);
    setResize(size);
  }, [width]);

  return (
    <>
      <section className="CarruselButtons" id="menuFilters">
        {show ? (
          <section className="secIcon">
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
          <></>
        )}
        <section
          className="secCarrusel"
          style={{
            width: `${show && width < 768 ? "95%" : "100%"}`,
            padding: `${show ? "0" : "0"}`,
          }}
        >
          <Carousel
            emulateTouch={true}
            showThumbs={false}
            showArrows={false}
            showStatus={false}
            showIndicators={false}
            centerMode={true}
            centerSlidePercentage={resize}
          >
            {filters.map((item, index) => {
              return (
                <motion.div whileTap={{ scale: 0.9 }} key={index}>
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
                </motion.div>
              );
            })}
          </Carousel>
        </section>
      </section>
    </>
  );
};

export default FilterButtons;
