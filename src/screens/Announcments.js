import React from "react";
import background from "../images/pet.jpg";

const Announcments = () => {
  return (
    <div className="swiper-slide">
      <div
        className="birthday_bg"
        style={{
          backgroundImage: `url(${background})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "contain",
          backgroundPosition: "center",
        }}
      ></div>
    </div>
  );
};

export default Announcments;
