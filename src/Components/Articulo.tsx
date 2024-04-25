import React from "react";
function Articulo({ data, class: className}) {
  return (
    <article className={className} key={data.id}>
      <img src={data.src} alt={data.img} className="person-img" />
      <h4>{data.img}</h4>
      <p className="title">{data.categoria}</p>
    </article>
  );
}
export default Articulo;
