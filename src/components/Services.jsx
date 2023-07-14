import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import img1 from "../assets/3.jpg";
import img2 from "../assets/4.jpg";
const Services = () => {
  return (
    <div>
      <Carousel
        infiniteLoop
        autoPlay
        showStatus={false}
        showArrows={false}
        interval={1000}
        showThumbs={false}
        transitionTime={2}
      >
        <div >
          <img src={img1} alt="item1" />
          <p className="legend">Full Stack Developer</p>
        </div>

        <div>
          <img src={img2} alt="item2" />
          <p className="legend">DevOp Enginner</p>
        </div>
      </Carousel>
    </div>
  );
};

export default Services;
