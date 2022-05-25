import React from "react";
import Cards from "./Cards";

import Sdata from "./Sdata";

const App = () => (
  <>
    <h1 className="heading_style">List 0f top 5 Netflix Series in 2021</h1>
    {Sdata.map((data) => {
      return (
        <Cards
          key={data.id}
          imgsrc={data.imgsrc}
          title={data.title}
          sname={data.sname}
          link={data.link}
        />
      );
    })}
  </>
);

export default App;
