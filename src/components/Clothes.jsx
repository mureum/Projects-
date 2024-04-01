import React from "react";
import img1 from "../assets/img/tracksuit.jpg";
import img2 from "../assets/img/img2.jpg";
import img3 from "../assets/img/img3.jpg";
import img4 from "../assets/img/img4.jpg";
import img5 from "../assets/img/img5.jpg";
import img6 from "../assets/img/img6.jpg";
import ClothesCard from "../layouts/ClothesCard";

const Clothes = () => {
  return (
    <div className=" min-h-screen flex flex-col justify-center items-center lg:px-32 px-5">
      <h1 className=" text-4xl font-semibold text-center pt-24 pb-10">
        Our Clothes
      </h1>

      <div className=" flex flex-wrap gap-8 justify-center">
        <ClothesCard img={img1} title="Tracksuit" price="£10.99" />
        <ClothesCard img={img2} title="Casual Sun Dress" price="£12.99" />
        <ClothesCard img={img3} title="Silk Fleece" price="£10.99" />
        <ClothesCard img={img4} title="Leather Longliner Jacket" price="£11.99" />
        <ClothesCard img={img5} title="Casual Crop top" price="£10.99" />
        <ClothesCard img={img6} title="Pearl Hoodie" price="£12.99" />
      </div>
    </div>
  );
};

export default Clothes;
