import React from "react";
import Cards from "./Cards";
import Sdata from "./Sdata";
const Netflix = () => {
  Sdata.map((data) => {
    return (
      <Cards
        key={data.id}
        imgsrc={data.imgsrc}
        title={data.title}
        sname={data.sname}
        link={data.link}
      />
    );
  });
};
export default Netflix;
