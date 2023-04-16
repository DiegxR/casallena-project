import React, { useContext, useState } from "react";
import "./stylesFilters.scss";
import Button from "../button/Button";
import { BsFillArrowLeftCircleFill } from "react-icons/bs";
import { Appcontext } from "../../router/Router";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import logo from "../../assets/logo.svg";

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

  const actionFilter = (item) => {
    setFilterButton(item.id);
  };

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
          {filterButton !== -1 ? (
            <BsFillArrowLeftCircleFill
              className="iconLeft"
              onClick={() => {
                setFilterButton(-1);
              }}
            />
          ) : (
            <></>
          )}
          {filters.map((item, index) => (
            <>
              <Button
                key={item.id}
                children={item.option}
                style={filterButton === item.id ? 2 : 1}
                action={() => {
                  actionFilter(item);
                }}
                width={"145px"}
              />
            </>
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
              {filterButton !== -1 ? (
                <section className="secIconSlider">
                  <BsFillArrowLeftCircleFill
                    className="iconLeft"
                    onClick={() => {
                      setFilterButton(-1);
                    }}
                  />
                </section>
              ) : (
                <></>
              )}
              {filters.map((item, index) => {
                return (
                  <Button
                    key={item.id}
                    children={item.option}
                    style={filterButton === item.id ? 2 : 1}
                    width={"150px"}
                    action={() => {
                      actionFilter(item);
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
