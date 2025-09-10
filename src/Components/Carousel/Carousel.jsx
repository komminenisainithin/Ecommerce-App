import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Carousel() {
  const settings = {
    className: "",
    
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    adaptiveHeight: true,
    autoplay: true,
    speed:500,
    autoplaySpeed: 2000,
  };

  return (
    <div className="slider-container">
      <Slider {...settings}>
        <div>
          <img src="public/shopping.jpg" alt="" height={'500px'} width={'100%'} style={{objectFit:'cover',objectPosition:'center'}}/>
        </div>
        <div>
          <img src="public/couple_Shopping.jpg" alt="" height={'500px'} width={'100%'} style={{objectFit:'cover',objectPosition:'center'}}/>
        </div>
        
      </Slider>
    </div>
  );
}

export default Carousel;
