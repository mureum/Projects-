import React from "react";
import img from "../assets/img/about.jpg";
import Button from "../layouts/Button";

const About = () => {
  return (
    <div className="min-h-screen flex flex-col lg:flex-row justify-center items-center lg:px-32 px-5">
      

      <div className=" space-y-4 lg:pt-14">
        <h1 className=" font-semibold text-4xl text-center md:text-start">
          Why Choose Us?
        </h1>
        <p>
        At Culture Shock, we stand out for our unique designs, quality craftsmanship, and personalised experience. With a commitment to affordable luxury and community connection, we offer more than just clothes—we offer a statement of individuality. Join us and dare to be fabulous.
        </p>
        <p>
        Established in 1999, Culture Shock has evolved into a beacon of style, quality, and affordability. With a dedication to sustainability and a passion for empowering self-expression, we're not just a clothing company—we're a community. Join us in celebrating diversity and creativity through fashion.
        </p>
        <div className=" flex justify-center lg:justify-start">
          <Button title="Learn More" />
        </div>
      </div>
    </div>
  );
};

export default About;
