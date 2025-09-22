import React from "react";
import { BentoGrid, BentoGridItem } from "./ui/BentoGrid";
import { gridItems } from "@/data";


const Grid = () => {

  return (
    <section id="about">
      <BentoGrid>
        {gridItems.map((item) => (
          <BentoGridItem key={item.id} {...item} className={item.className} img ={item.img}/>
        ))}
      </BentoGrid>
    </section>
  );
};

export default Grid;
