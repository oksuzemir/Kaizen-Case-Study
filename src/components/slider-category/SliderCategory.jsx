// import Swiper core and required modules
import {  Pagination } from "swiper";
import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import "./sliderCategory.css";

const SliderCategory = () => {
const [filterButtons, setFilterButtons] = useState([
  {title:"Sprite", icon:"./img/category-slider/sprite-icon.svg", id: 1},
  {title:"Burger King", icon:"./img/category-slider/burger-king-icon.svg", id: 2},
  {title:"Sprite", icon:"./img/category-slider/sprite-icon.svg", id: 3},
  {title:"Burger King", icon:"./img/category-slider/burger-king-icon.svg", id: 4},
  {title:"Sprite", icon:"./img/category-slider/sprite-icon.svg", id: 5},
  {title:"Burger King", icon:"./img/category-slider/burger-king-icon.svg", id: 6},
]);
  return (
    <>
      <div className="category-slider">
        <div className="container">
          <div className="slider-category-tabs">
            <ul>
              <li> <img src="./img/category-slider/search-icon.svg" alt="" />
                <span>Fırsat Bul</span>
              </li>
              <li> <img src="./img/category-slider/sprite-icon.svg" alt="" />
                <span>Sprite</span>
              </li>
              <li> <img src="./img/category-slider/burger-king-icon.svg" alt="" />
                <span>Burger King</span>
              </li>
              <li> <img src="./img/category-slider/trendyol-icon.svg" alt="" />
                <span>Trendyol</span>
              </li>
            </ul>
          </div>
          <Swiper
            spaceBetween={0}
            slidesPerView={4}
            modules={[ Pagination]}
            pagination={{ clickable: true }}
            breakpoints={{
              1300: {
                slidesPerView: 4,
                spaceBetween: 15,
              },
              1100: {
                slidesPerView: 3,
                spaceBetween: 10,
              },
              850: {
                slidesPerView: 2.5,
                spaceBetween: 10,
              },
              600: {
                slidesPerView: 1.5,
                spaceBetween: 10,
              },
              150: {
                slidesPerView: 1.5,
                spaceBetween: 10,
              },
        
           
            }}
          >
            <SwiperSlide> 
              <img src="./img/category-slider/category-slider-1.svg" alt="" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="./img/category-slider/category-slider-2.svg" alt="" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="./img/category-slider/category-slider-1.svg" alt="" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="./img/category-slider/category-slider-2.svg" alt="" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="./img/category-slider/category-slider-1.svg" alt="" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="./img/category-slider/category-slider-2.svg" alt="" />
            </SwiperSlide>
           
          </Swiper>
        </div>
      </div>
    </>
  );
}

export default SliderCategory;
