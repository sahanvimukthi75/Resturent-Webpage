import React from "react";
import DishesCard from "../layouts/DishesCard";
import img1 from "../assets/img1.jpg";
import img2 from "../assets/img2.jpg";
import img3 from "../assets/img3.jpg";

const Menu = () => {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center lg:px-32 px-5">
      <h1 className="text-4xl font-semibold text-center lg:pt-8 pt-24 pb-10">
        Premium Menu
      </h1>

      <div className="flex flex-wrap gap-8 justify-center">
        <DishesCard img={img1} title="Delisious Dish" price="$17.25" />
        <DishesCard img={img2} title="Delisious Dish" price="$37.25" />
        <DishesCard img={img3} title="Delisious Dish" price="$27.25" />
      </div>
    </div>
  );
};

export default Menu;
