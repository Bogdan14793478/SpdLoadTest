import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Heart from "../../assets/Heart.svg";
import firstSm from "../../assets/firstSm.svg";
import secondSm from "../../assets/secondSm.svg";
import thirdSm from "../../assets/thirdSm.svg";
import { RocketsType } from "../../state/card";
import TourCard from "./TourCard";
import classes from "./styles.module.css";

interface SimpleSliderProps {
  data?: RocketsType[];
}

let imgInfoTwo: string[] = [firstSm, secondSm, thirdSm];

export const SimpleSlider: React.FC<SimpleSliderProps> = ({ data }) => {
  const settings = {
    slidesToShow: 3,
    infinite: false,
    slidesToScroll: 1,
    arrows: false,
    dots: true,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };

  const chooseImg = (index: number, arrImg: string[]) => {
    if (index <= 2) return imgInfoTwo[index];

    if (index % 3 === 0) {
      const el = arrImg.shift();
      el && arrImg.push(el);
      return imgInfoTwo[0];
    }
    if ((index - 1) % 3 === 0) {
      return imgInfoTwo[1];
    }
    if ((index - 2) % 3 === 0) {
      return imgInfoTwo[2];
    }
  };

  return (
    <div className={classes.container_slick}>
      <Slider {...settings}>
        {data?.map((item: RocketsType, i) => {
          return (
            <div key={item.id}>
              <TourCard
                type="add"
                icon={Heart}
                item={item}
                img={chooseImg(i, imgInfoTwo)}
              />
            </div>
          );
        })}
      </Slider>
    </div>
  );
};

function SampleNextArrow(props: any) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", right: "0px" }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props: any) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", zIndex: "3", left: "0px" }}
      onClick={onClick}
    />
  );
}
