// React
import React from "react";
// React

// CSS
import styles from "./Slider.module.css";
import "swiper/css";
import "swiper/css/navigation";
// CSS

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

type T_SliderProps = {
  slides: React.ReactNode[];
  containerClassName: string;
};

const Slider: React.FunctionComponent<T_SliderProps> = ({
  containerClassName,
  slides,
}) => {
  return (
    <div className={`${styles.sliderContainer} ${containerClassName}`}>
      <Swiper
        spaceBetween={50}
        slidesPerView={3.1}
        modules={[Navigation]}
        direction={"horizontal"}
        className="w-full "
        loop
        simulateTouch
        onSlideChange={() => console.log("slide change")}
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>{slide}</SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Slider;
