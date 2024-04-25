import React, { useEffect, useState } from "react";
import data from "../data.js";
import Carrusel from "./Carrusel.js";
import Botones from "./Botones.js";
import IData from "../interface/IData.js";

function Header() {
  const [cat, setCat] = useState("todo");

  const childToParent = (childdata) => {
    setCat(childdata);
  };

  return (
    <section className="section">
      <div className="title">
        <h2>slider DWEC</h2>
        <div className="underline"></div>
      </div>
      <Botones childToParent={childToParent} />
      <Carrusel tipo={cat}/>
    </section>
  );
}

export default Header;
