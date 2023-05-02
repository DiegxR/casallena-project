import React, { useContext, useState, useEffect } from "react";
import { useSelector } from "react-redux";
import "./stylesFilters.scss";
import Button from "../button/Button";
import { BsFillArrowLeftCircleFill } from "react-icons/bs";
import { Appcontext } from "../../router/Router";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { motion } from "framer-motion";
import { getCenterSlidePercentage } from "../../services/resizeCarrusel";
import { useDispatch } from "react-redux";
import { filterDates, getObras } from "../../redux/actions/obrasActions";

const FilterButtons = () => {
  const { filterButton, setFilterButton, width, setFilterInput } =
    useContext(Appcontext);

  const { filters } = useSelector((store) => store.obras);
  const [show, setShow] = useState(false);
  const [resize, setResize] = useState(100);

  const actionFilter = (item) => {
    setFilterButton(item.cod);
  };
  const dispatch = useDispatch();

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

  useEffect(() => {
    switch (filterButton) {
      case 0:
        dispatch(
          getObras({
            collectionName: "Obras",
            key: "price",
            operator: "==",
            value: 0,
          })
        );
        break;
      case 1:
        dispatch(filterDates({ day: "today" }));
        break;
      case 2:
        dispatch(filterDates({ day: "tomorrow" }));
        break;
      case 3:
        dispatch(
          getObras({
            collectionName: "Obras",
            key: "price",
            operator: ">",
            value: 14900,
          })
        );
        break;
      case 4:
        dispatch(
          getObras({
            collectionName: "Obras",
            key: "price",
            operator: ">",
            value: 29900,
          })
        );
        break;
      case 5:
        dispatch(
          getObras({
            collectionName: "Obras",
            key: "price",
            operator: ">",
            value: 59900,
          })
        );
        break;
      case 6:
        dispatch(
          getObras({
            collectionName: "Obras",
            key: "gender",
            operator: "==",
            value: 6,
          })
        );
        break;
      case 7:
        dispatch(
          getObras({
            collectionName: "Obras",
            key: "gender",
            operator: "==",
            value: 7,
          })
        );
        break;
      case 8:
        dispatch(
          getObras({
            collectionName: "Obras",
            key: "gender",
            operator: "==",
            value: 8,
          })
        );
        break;
      case 9:
        dispatch(
          getObras({
            collectionName: "Obras",
            key: "gender",
            operator: "==",
            value: 9,
          })
        );
        break;
      case 10:
        dispatch(
          getObras({
            collectionName: "Obras",
            key: "gender",
            operator: "==",
            value: 10,
          })
        );
        break;

      default:
        dispatch(getObras({ collectionName: "Obras", key: "", value: "" }));
        break;
    }
  }, [filterButton]);

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
                  dispatch(
                    getObras({ collectionName: "Obras", key: "", value: "" })
                  );
                  setFilterInput("");
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
            {filters ? (
              filters.map((item, index) => {
                return (
                  <motion.div whileTap={{ scale: 0.9 }} key={index}>
                    <Button
                      key={index}
                      children={item.option}
                      style={filterButton === item.cod ? 2 : 1}
                      width={"150px"}
                      action={() => {
                        actionFilter(item);
                        setShow(true);
                      }}
                    />
                  </motion.div>
                );
              })
            ) : (
              <></>
            )}
          </Carousel>
        </section>
      </section>
    </>
  );
};

export default FilterButtons;
