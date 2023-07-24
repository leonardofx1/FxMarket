import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import "../../../style/swiperStyle.css";
import { Swiper, SwiperSlide } from "swiper/react";

import adestramento from "../../../assets/img/adestramento.png";

const SwiperHome = () => {

  return (
    <Swiper
      spaceBetween={30}
      centeredSlides={true}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      pagination={{
        clickable: true,
      }}
      navigation={true}
      modules={[Autoplay, Pagination, Navigation]}
      className="mySwiper"
    >
      <SwiperSlide>
        <img className="slide__item" src={adestramento} alt="" />
      </SwiperSlide>
      <SwiperSlide>
        <img className="slide__item" src={adestramento} alt="" />
      </SwiperSlide>{" "}
      <SwiperSlide>
        <img className="slide__item" src={adestramento} alt="" />
      </SwiperSlide>
      <SwiperSlide>
        <img className="slide__item" src={adestramento} alt="" />
      </SwiperSlide>{" "}
      <SwiperSlide>
        <img className="slide__item" src={adestramento} alt="" />
      </SwiperSlide>{" "}
      <SwiperSlide>
        <img className="slide__item" src={adestramento} alt="" />
      </SwiperSlide>
    </Swiper>
  );
};

export default SwiperHome;
