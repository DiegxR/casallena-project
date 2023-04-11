import React from "react";
import "./stylesFooter.scss";
//Importación de iconografia
import { BsFillHouseDoorFill } from "react-icons/bs";
import { GoSearch } from "react-icons/go";
import { BiHappyBeaming } from "react-icons/bi";
import { FaUser } from "react-icons/fa";
import { CiMenuKebab } from "react-icons/ci";

const FooterMenu = () => {
  const menu = [
    {
      id: 0,
      icon: <BsFillHouseDoorFill className="iconFooter" />,
      option: "Inicio",
    },
    {
      id: 1,
      icon: <GoSearch className="iconFooter" />,
      option: "Búsqueda",
    },
    {
      id: 2,
      icon: <BiHappyBeaming className="iconFooter" />,
      option: "Comunidad",
    },
    {
      id: 3,
      icon: <FaUser className="iconFooter" />,
      option: "Perfil",
    },
    {
      id: 4,
      icon: <CiMenuKebab className="iconFooter iconmenu" />,
      option: "",
    },
  ];
  return (
    <footer className="secFooter">
      {menu.map((item) => (
        <figure key={item.id}>
          {item.icon}
          <span>{item.option}</span>
        </figure>
      ))}
    </footer>
  );
};

export default FooterMenu;
