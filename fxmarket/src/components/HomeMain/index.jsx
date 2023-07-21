import * as S from "./style";
import "../../style/swiperStyle.css";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

import 'swiper/css/effect-cards';
import logo from "../../assets/img/logo.gif";
import adestramento from "../../assets/img/adestramento.png";

const HomeMain = () => {
  return (
    <>
      <S.Main>
        <S.ContainerLogo>
          <img src={logo} alt="" />
        </S.ContainerLogo>
        <S.ContainerProdutos>
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
            </SwiperSlide> <SwiperSlide>
              <img className="slide__item" src={adestramento} alt="" />
            </SwiperSlide> <SwiperSlide>
              <img className="slide__item" src={adestramento} alt="" />
            </SwiperSlide>
          </Swiper>
        </S.ContainerProdutos>
      </S.Main>
    </>
  );
};

export default HomeMain;
