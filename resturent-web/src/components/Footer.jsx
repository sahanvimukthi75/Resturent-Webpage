import React from "react";

const Footer = () => {
  return (
    <div className="bg-black text-white rounded-t-3xl mt-8 md:mt-0">
      <div className=" flex flex-col md:flex-row justify-between p-8 md:px-32 px-5">
        <div className="w-full md:w-1/4">
          <h1 className="font-semibold text-xl pb-4">Food web</h1>
          <p className="text-sm">
            Eveniet, corporis. Deserunt consequatur corrupti sit facilis,
            laborum modi ipsam.
          </p>
        </div>
        <div>
          <h1 className="font-medium text-xl pb-4 md:pt-0">Links</h1>
          <nav className="flex flex-col gap-2">
            <a
              className=" hover:text-brightColor transition-all cursor-pointer"
              href="/"
            >
              Dishes
            </a>
            <a
              className=" hover:text-brightColor transition-all cursor-pointer"
              href="/"
            >
              About
            </a>
            <a
              className=" hover:text-brightColor transition-all cursor-pointer"
              href="/"
            >
              Menu
            </a>
            <a
              className=" hover:text-brightColor transition-all cursor-pointer"
              href="/"
            >
              Review
            </a>
          </nav>
        </div>

        <div>
          <h1 className="font-medium text-xl pb-4 md:pt-0">Menu</h1>
          <nav className="flex flex-col gap-2">
            <a
              className=" hover:text-brightColor transition-all cursor-pointer"
              href="/"
            >
              Our Dishes
            </a>
            <a
              className=" hover:text-brightColor transition-all cursor-pointer"
              href="/"
            >
              Premium Menu
            </a>
          </nav>
        </div>
        <div>
          <h1 className="font-medium text-xl pb-4 md:pt-0">Contact Us</h1>
          <nav className="flex flex-col gap-2">
            <a
              className=" hover:text-brightColor transition-all cursor-pointer"
              href="/"
            >
              Sahanvimu.com
            </a>
            <a
              className=" hover:text-brightColor transition-all cursor-pointer"
              href="/"
            >
              078-8536412
            </a>
            <a
              className=" hover:text-brightColor transition-all cursor-pointer"
              href="/"
            >
              social media
            </a>
          </nav>
        </div>
      </div>
      <div>
        <p className="text-center py-4">
          Lorem ipsum dolor sit
          <span className="text-brightColor">programmers</span>| all -right
          reserved
        </p>
      </div>
    </div>
  );
};

export default Footer;
