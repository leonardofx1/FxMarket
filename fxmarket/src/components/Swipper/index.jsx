import React, { Children, useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';


import CardProduct from '../CardProduct';
// import required modules
import { Pagination } from 'swiper/modules';

const SwipperProduct = () =>  {
  return (
    <>
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide><CardProduct/></SwiperSlide>
        <SwiperSlide><CardProduct/></SwiperSlide>  <SwiperSlide><CardProduct/></SwiperSlide>  <SwiperSlide><CardProduct/></SwiperSlide>  <SwiperSlide><CardProduct/></SwiperSlide>  <SwiperSlide><CardProduct/></SwiperSlide>
      </Swiper>
    </>
  );
}
export default SwipperProduct