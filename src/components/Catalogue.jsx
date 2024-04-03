import React from "react";
import ClothesCard from "../layouts/ClothesCard";
import menu1 from "../assets/img/menu1.jpg";
import menu2 from "../assets/img/menu2.jpg";
import menu3 from "../assets/img/menu3.jpg";

const Catalogue = () => {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center lg:px-32 px-5">
      <h1 className=" text-4xl font-semibold text-center lg:pt-8 pt-24 pb-10">
        Premium Catalogue
      </h1>

      <div className=" flex flex-wrap gap-8 justify-center">
        <ClothesCard img={menu1} title="Fashionita Set" price="£16.99" />
        <ClothesCard img={menu2} title="Formal Dress" price="£18.99" />
        <ClothesCard img={menu3} title="All-black Suit" price="£14.99" />
      </div>
    </div>
  );
};

export default Catalogue;
