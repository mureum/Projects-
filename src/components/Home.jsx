import React from "react";
import Button from "../layouts/Button";

const Home = () => {
  return (
    <div className=" min-h-screen flex flex-row justify-between items-center lg:px-32 px-5 bg-[url('./assets/img/hero.jpg')] bg-cover bg-no-repeat ">
      <div className=" w-full lg:w-2/3 space-y-5">
        <h1 className=" text-backgroundColor font-semibold text-6xl">
          Dress to Impress, Every Stitch Tells Your Story!
        </h1>
        <p className=" text-backgroundColor">
        Why blend in when you can stand out? With our vibrant designs and attention-grabbing styles, why settle for ordinary when you can embrace the extraordinary? Let your wardrobe tell the world who you truly are. Dare to be different, dare to be fabulous
        </p>
        <div className=" lg:pl-44">
          <Button title="Order Now" />
        </div>
      </div>
    </div>
  );
};

export default Home;
