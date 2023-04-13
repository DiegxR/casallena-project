import React, { useState } from "react";
import "./stylesFooter.scss";
//Importación de iconografia
import { BsFillHouseDoorFill } from "react-icons/bs";
import { GoSearch } from "react-icons/go";
import { BiHappyBeaming } from "react-icons/bi";
import { FaUser } from "react-icons/fa";
import { CiMenuKebab } from "react-icons/ci";
import { useLocation, useNavigate } from "react-router";
import { useEffect } from "react";

const FooterMenu = () => {
  const menu = [
    {
      id: 0,
      icon: <BsFillHouseDoorFill className="iconFooter iconhome" />,
      option: "Inicio",
      path: "/home",
    },
    {
      id: 1,
      icon: <GoSearch className="iconFooter" />,
      option: "Búsqueda",
      path: "/search",
    },
    {
      id: 2,
      icon: <BiHappyBeaming className="iconFooter" />,
      option: "Comunidad",
      path: "/comunity",
    },
    {
      id: 3,
      icon: <FaUser className="iconFooter" />,
      option: "Perfil",
      path: "/profile",
    },
    {
      id: 4,
      icon: <CiMenuKebab className="iconFooter iconmenu" />,
      option: "",
      path: "/menu",
    },
  ];
  const navigate = useNavigate();
  const actionMenu = (item) => {
    navigate(item.path);
  };
  const location = useLocation();

  return (
    <section className="secFoot">
      <footer className="secFooter">
        {menu.map((item) => (
          <figure
            key={item.id}
            onClick={() => {
              actionMenu(item);
            }}
            className={item.path === location.pathname ? "iconActive" : ""}
          >
            {item.icon}
            <span>{item.option}</span>
          </figure>
        ))}
      </footer>
    </section>
  );
};

export default FooterMenu;
