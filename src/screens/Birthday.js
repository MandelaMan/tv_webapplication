import React from "react";
import background from "../images/pet.jpg";

const Birthday = () => {
  return (
    <div
      className="birthday_bg"
      style={{
        backgroundImage: `url(${background})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "contain",
        backgroundPosition: "center",
      }}
    ></div>
  );
};

export default Birthday;
