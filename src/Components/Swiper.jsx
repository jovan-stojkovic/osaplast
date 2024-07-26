import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, A11y, EffectCoverflow, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/bundle";
import "swiper/css/pagination";
import "swiper/css/effect-coverflow";
import "../Styles/Swiper.scss";

const SwiperComponent = () => {
  return (
    <div className="swiper-cont">
      <Swiper
        modules={[Pagination, A11y, EffectCoverflow, Autoplay]}
        spaceBetween={10}
        slidesPerView={3}
        loop={true}
        autoplay={{ delay: 2000, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        effect="coverflow"
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 0,
          slideShadows: true,
        }}
      >
        <SwiperSlide>
          <img
            src="/products/UKRASNE GARNIŠNE/dupla garn.jpg"
            alt="slide_image"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="/products/UKRASNE GARNIŠNE/garnisna kugla.jpg"
            alt="slide_image"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="/products/UKRASNE GARNIŠNE/garnisna kvadratna.jpg"
            alt="slide_image"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="/products/UKRASNE GARNIŠNE/garnisne fi 16mm.JPG"
            alt="slide_image"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="/products/UKRASNE GARNIŠNE/garnišne valjak.jpg"
            alt="slide_image"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="/products/UKRASNE GARNIŠNE/nosač garnišne.jpg"
            alt="slide_image"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="/products/UKRASNE GARNIŠNE/završetci valjak.JPG"
            alt="slide_image"
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default SwiperComponent;
