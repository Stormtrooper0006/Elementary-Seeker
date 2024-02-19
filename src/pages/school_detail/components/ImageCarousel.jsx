import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const ImageCarousel = (props) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <Slider {...settings}>
      {props.images.map((imageUrl, i) => (
        <div key={i}>
          <img
            className="border rounded-3"
            src={imageUrl}
            alt={`Image ${i + 1}`}
            style={{ width: "100%", height: "400px" }}
          />
        </div>
      ))}
    </Slider>
  );
};

export default ImageCarousel;
