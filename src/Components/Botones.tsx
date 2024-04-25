import React from "react";
import data from "../data.js";
import IData from "../interface/IData.js";

export default function Botones({ childToParent }) {
  const uniqueData = data.filter((value, index, self) => {
    return self.findIndex((t) => t.categoria === value.categoria) === index;
  });
  return (
    <div className="btn-container">
      <button
        type="button"
        className="filter-btn"
        data-id="todo"
        onClick={() => childToParent("todo")}
      >
        Todas las categorias
      </button>
      {uniqueData.map((d: IData) => {
        return (
          <button
            type="button"
            className="filter-btn"
            data-id={d.categoria}
            key={d.categoria}
            onClick={() => childToParent(d.categoria)}
          >
            {d.categoria}
          </button>
        );
      })}
    </div>
  );
}
