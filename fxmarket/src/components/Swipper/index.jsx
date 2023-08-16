import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import CardProduct from '../CardProduct';
import { Pagination } from 'swiper/modules';

const SwipperProduct = ({ docs }) => {
  return (
    <Swiper
      slidesPerView={3}
      spaceBetween={30}
      pagination={{
        clickable: true,
      }}
      modules={[Pagination]}
      className="mySwiper"
    >
      {docs.map(({ id, quantidade, valorProduto, valorParcelas, descricao, img }) => (
        <SwiperSlide key={id}>
          <CardProduct
            img={img}
            valorParcelas={valorParcelas}
            quantidade={quantidade}
            valorProduto={valorProduto}
            descricao={descricao}
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default SwipperProduct;
