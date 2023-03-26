import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Heart from "../../assets/Heart.svg";

import { RocketsType } from "../../state/card";
import TourCard from "./TourCard";
import classes from "./styles.module.css";

interface SimpleSliderProps {
  data?: RocketsType[];
  img: string[];
}

export const SimpleSlider: React.FC<SimpleSliderProps> = ({ data, img }) => {
  const settings = {
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
    dots: true,
  };

  // const chooseImg = (index) => {
  //   const indexData = index;

  //   const length = data?.length;
  //   let indexImg;
  //   if (index <= 3) return img[indexData];
  // };

  return (
    <div className={classes.container_slick}>
      <Slider {...settings}>
        {data?.map((item: RocketsType, i) => {
          return (
            <div key={item.id}>
              <TourCard type="add" icon={Heart} item={item} img={img[i]} />
            </div>
          );
        })}
      </Slider>
    </div>
  );
};
