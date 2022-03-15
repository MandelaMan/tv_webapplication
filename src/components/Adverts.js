import React from "react";
import ExampleAdvert1 from "../images/adverts/advert1.jpg";

const Adverts = () => {
  var advert1 = {
    backgroundImage: `url(${process.env.PUBLIC_URL + `/adverts/advert1.jpg`})`,
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
  };

  var advert2 = {
    backgroundImage: `url(${process.env.PUBLIC_URL + `/adverts/advert2.jpg`})`,
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
  };

  return (
    <>
      <div className="slide-screen">
        <div className="swiper-slide">saka hella</div>
      </div>
    </>
  );
};

export default Adverts;
