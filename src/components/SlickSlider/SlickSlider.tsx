import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import classes from "./styles.module.css";

interface PropsSlick {
  imgInfo: string[];
}

const SlickSwitcher: React.FC<PropsSlick> = ({ imgInfo }) => {
  var settings = {
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    dots: true,
  };

  return (
    <div className={classes.container_slick}>
      <Slider {...settings}>
        {imgInfo?.map((item: string, index: number) => {
          return (
            <img
              key={index}
              src={item}
              alt="/"
              className={classes.img_carousel}
            />
          );
        })}
      </Slider>
    </div>
  );
};

export default SlickSwitcher;
