import { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, A11y, EffectCoverflow, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/bundle";
import "swiper/css/pagination";
import "swiper/css/effect-coverflow";
import "../Styles/Swiper.scss";
import ReactDOM from "react-dom";

const Modal = ({ images, currentIndex, onClose, onNext, onPrev }) => {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        onClose();
      } else if (e.key === "ArrowRight") {
        onNext();
      } else if (e.key === "ArrowLeft") {
        onPrev();
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [onClose, onNext, onPrev]);

  return ReactDOM.createPortal(
    <div className="modal active">
      <img
        src={images[currentIndex]}
        alt={`modal_image_${currentIndex}`}
        onClick={onClose}
      />
      <button className="modal-prev" onClick={onPrev}></button>
      <button className="modal-next" onClick={onNext}></button>
    </div>,
    document.body
  );
};

const SwiperComponent = ({ number, productName }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalImageIndex, setModalImageIndex] = useState(null);

  const openModal = (index) => {
    setModalImageIndex(index);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setModalImageIndex(null);
  };

  const handleNext = () => {
    setModalImageIndex((prevIndex) => (prevIndex + 1) % number);
  };

  const handlePrev = () => {
    setModalImageIndex((prevIndex) => (prevIndex - 1 + number) % number);
  };

  const generateSlides = () => {
    const slides = [];
    for (let i = 1; i <= number; i++) {
      slides.push(
        <SwiperSlide key={i}>
          <img
            src={`/products/${productName}/${i}.jpg`}
            alt={`slide_image_${i}`}
            onClick={() => openModal(i - 1)}
          />
        </SwiperSlide>
      );
    }
    return slides;
  };

  const images = Array.from(
    { length: number },
    (_, i) => `/products/${productName}/${i + 1}.jpg`
  );

  useEffect(() => {
    if (isModalOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [isModalOpen]);

  return (
    <div className="swiper-cont">
      <Swiper
        modules={[Pagination, A11y, EffectCoverflow, Autoplay]}
        spaceBetween={10}
        slidesPerView={3}
        loop={true}
        pagination={{ clickable: true }}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        effect="coverflow"
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 150,
          modifier: 1,
          slideShadows: true,
        }}
      >
        {generateSlides()}
      </Swiper>

      {isModalOpen && (
        <Modal
          images={images}
          currentIndex={modalImageIndex}
          onClose={closeModal}
          onNext={handleNext}
          onPrev={handlePrev}
        />
      )}
    </div>
  );
};

export default SwiperComponent;
