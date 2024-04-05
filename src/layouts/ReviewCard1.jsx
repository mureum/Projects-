import React from "react";

const ReviewCard1 = (props) => {
  return (
    <div className=" w-full md:w-1/3 bg-white border-2 border-lightText md:border-none p-5 rounded-lg shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px]">
      <div>
        <p className=" text-lightText">
        Culture Shock is a fashion haven that breaks all boundaries. Step inside and be greeted by a vibrant atmosphere that oozes creativity. The curated collection is a blend of avant-garde designs and timeless classics, ensuring there's something for every style. Staff are friendly and helpful without being overbearing. Shopping here isn't just about clothes; it's an inspiring experience. Culture Shock is a must-visit gem in the fashion world!
        </p>
      </div>

      <div className=" flex flex-row justify-center items-center mt-4 gap-4">
        <img className=" rounded-full w-1/4" src={props.img} alt="img" />
        <h3 className=" font-semibold ">{props.name}</h3>
      </div>
    </div>
  );
};

export default ReviewCard1;
