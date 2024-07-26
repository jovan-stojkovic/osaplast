import { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, A11y, EffectCoverflow } from "swiper/modules";
import "swiper/css";
import "swiper/css/bundle";
import "swiper/css/pagination";
import "swiper/css/effect-coverflow";
import "../Styles/Swiper.scss";
import ReactDOM from "react-dom";

const Modal = ({ imageSrc, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [onClose]);

  return ReactDOM.createPortal(
    <div className="modal active">
      <img src={imageSrc} alt="modal_image" onClick={onClose} />
    </div>,
    document.body
  );
};

const SwiperComponent = ({ number, productName }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalImage, setModalImage] = useState(null);

  const openModal = (imageSrc) => {
    setModalImage(imageSrc);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setModalImage(null);
  };

  const generateSlides = () => {
    const slides = [];
    for (let i = 1; i <= number; i++) {
      slides.push(
        <SwiperSlide key={i}>
          <img
            src={`/products/${productName}/${i}.jpg`}
            alt={`slide_image_${i}`}
            onClick={() => openModal(`/products/${productName}/${i}.jpg`)}
          />
        </SwiperSlide>
      );
    }
    return slides;
  };

  return (
    <div className="swiper-cont">
      <Swiper
        modules={[Pagination, A11y, EffectCoverflow]}
        spaceBetween={10}
        slidesPerView={3}
        loop={true}
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
        {generateSlides()}
      </Swiper>

      {isModalOpen && <Modal imageSrc={modalImage} onClose={closeModal} />}
    </div>
  );
};

export default SwiperComponent;
