"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
// import Slider from "react-slick";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";
import {
  EffectCoverflow,
  Pagination,
  Navigation,
  Autoplay,
} from "swiper/modules";
import slide_image_1 from "../../public/image/7.jpg";
import slide_image_2 from "../../public/image/gallery2.jpeg";
import slide_image_3 from "../../public/image/jaiz.jpg";
import slide_image_5 from "../../public/image/fac-boarding.png";
import slide_image_4 from "../../public/image/fac-canteen.png";
import { cn } from "@/lib/utils";

import HighlightBox from "./HighlightBox";
import SwiperbuttonHighlight from "./SwiperbuttonHighlight";

// todo:convert to an array of objects
const images = [
  slide_image_1,
  slide_image_2,
  slide_image_3,
  slide_image_4,
  slide_image_5,
];

function Hightlightlides() {
  const breakpoints = {
    480: {
      slidesPerView: 3,
      spaceBetween: 10,
    },
    500: {
      slidesPerView: 1,
      spaceBetween: 10,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 10,
    },
    1024: {
      slidesPerView: 2,
      spaceBetween: 10,
    },
    1300: {
      slidesPerView: 3,
      spaceBetween: 10,
    },
  };

  return (
    <div className="relative max-lg:mt-28 my-24">
      <Swiper
        grabCursor={true}
        speed={1000}
        autoplay={{
          delay: 3000,
        }}
        coverflowEffect={{
          rotate: 0,
          stretch: 80,
          depth: 100,
          modifier: 1,
          slideShadows: false,
        }}
        loop={true}
        navigation={false}
        centeredSlides={true}
        modules={[Pagination, Navigation, Autoplay, EffectCoverflow]}
        breakpoints={breakpoints}
        className="!mx-0 !px-0 w-full flex items-center justify-center"
      >
        {images.map((image, idx) => (
          <SwiperSlide
            className={cn(
              `rounded-lg flex items-center justify-center mt-24  `
            )}
            key={idx}
          >
            <HighlightBox image={image} />
          </SwiperSlide>
        ))}
        <div className="absolute top-0 right-0 z-[4000] w-full flex items-center lg:mt-2">
          <div className="flex justify-between w-full flex-col lg:flex-row max-lg:gap-y-2">
            <div className="">
              <h2 className="text-texts text-3xl font-bold tracking-tight max-lg:text-center ">
                This Month&apos;s highlights
              </h2>
            </div>
            <div className=" max-lg:mr-5">
              <SwiperbuttonHighlight className="w-full flex items-center justify-end max-lg:hidden" />
            </div>
          </div>
        </div>
      </Swiper>
    </div>
  );
}

export default Hightlightlides;
