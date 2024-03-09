import React from "react";
import img7 from "../assets/img7.png";
import Button1 from "../layouts/Button";

const About = () => {
  return (
    <div className="min-h-screen flex flex-col  lg:flex-row justify-center items-center lg:px-32 px-10">
      <img src={img7} alt="img" />
      <div className="space-y-4 lg:pt-30">
        <h1 className="font-semibold text-4xl text-center md:text-start">Why choose Us?</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore
          nostrum perspiciatis at, adipisci, est quidem, facilis eum laudantium
          sunt quas nisi placeat eaque eius porro aperiam repudiandae fuga
          voluptate. Consectetur.
        </p>

        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquam
          possimus excepturi culpa deserunt ex debitis dignissimos nisi quidem
          quibusdam tempore impedit, velit similique autem doloribus placeat
          quos doloremque iure? Sint.
        </p>

        <div className="flex justify-center lg:justify-start">
          <Button1 title="learn more" />
        </div>
      </div>
    </div>
  );
};

export default About;
