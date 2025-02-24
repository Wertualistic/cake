import React from "react";

import Child from "../components/Child/Child";
import CakeCompilation from "../components/CakeCompilation/CakeCompilation";
import Accordion from "../components/Accordion/Accordion";
import Bonus from "../components/Bonus";
import Header from "../components/Header/Header";

function Home() {
  return (
    <div>
      <Header />
      <Bonus />
      <Child />
      <CakeCompilation />
      <Accordion />
    </div>
  );
}

export default Home;
