import React, { useState } from "react";
import "./stylesFilters.scss";
import Button from "../button/Button";
const FilterButtons = () => {
  const filters = [
    {
      id: 0,
      option: "APORTE VOLUNTARIO",
      action: "aporte",
    },
    {
      id: 1,
      option: "HOY",
      action: "hoy",
    },
    {
      id: 2,
      option: "MAÑANA",
      action: "mañana",
    },
    {
      id: 3,
      option: "DESDE 15K",
      action: "15",
    },
    {
      id: 4,
      option: "DESDE 30K",
      action: "30",
    },
    {
      id: 5,
      option: "DESDE 60K",
      action: "60",
    },
  ];

  const [click, setClick] = useState(false);
  const actionFilter = (item) => {
    setClick(item.id);
  };

  return (
    <section className="secButtonsFilters">
      {filters.map((item) => (
        <Button
          key={item.id}
          children={item.option}
          style={click === item.id ? 2 : 1}
          action={() => {
            actionFilter(item);
          }}
        />
      ))}
    </section>
  );
};

export default FilterButtons;
