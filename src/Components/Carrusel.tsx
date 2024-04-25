import React, { useState, useEffect } from "react";
import IData from "../interface/IData.js";
import Articulo from "./Articulo.js";
import dataJSON from "../data.js";

function Carrusel({ tipo }) {
  const [pos, setPos] = useState(1);
  const [datos, setDatos] = useState<IData[]>([]);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    // Set datos based on type
    if (tipo === "todo") setDatos(dataJSON);
    else setDatos(dataJSON.filter((d: IData) => d.categoria === tipo));
  }, [tipo]);

  useEffect(() => {
    // Set total based on the length of datos
    setTotal(datos.length);

    // Set interval to update pos
    const time = setInterval(() => {
      setPos((p) => (p % datos.length) + 1);
    }, 2000);

    // Clean up interval
    return () => clearInterval(time);
  }, [datos]);

  // Renderizamos el componente
  return (
    <div className="section-center">
      {datos.map((d: IData, i) => {
        return (
          <Articulo
            data={d}
            key={d.id}
            class={
              pos === i + 1
                ? "activeSlide"
                : pos > i + 1
                ? "lastSlide"
                : "nextSlide"
            }
          />
        );
      })}
    </div>
  );
}
export default Carrusel;
