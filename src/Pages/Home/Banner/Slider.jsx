import img1 from "../../../assets/banner_image/banner_1.jpg";
import img2 from "../../../assets/banner_image/banner_2.jpg";
import img3 from "../../../assets/banner_image/banner_3.jpg";
import img4 from "../../../assets/banner_image/banner_4.jpg";
import img5 from "../../../assets/banner_image/banner_5.jpg";
// Import for Swiper
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper/modules";

const Slider = () => {
  return (
    <div>
      <Swiper
        centeredSlides={true}
        autoplay={{
          delay: 3500,
          disableOnInteraction: false,
        }}
        autoHeight={true}
        spaceBetween={30}
        loop={true}
        pagination={{
          dynamicBullets: true,
          clickable: true,
        //   bulletClass: 'swiper-custom-bullet',
        }}
        modules={[Pagination, Autoplay]}
        className="mySwiper"
      >
        <SwiperSlide className="pb-6">
          <img src={img1} alt="" className="rounded"/>
        </SwiperSlide>
        <SwiperSlide className="pb-6">
          <img src={img2} alt="" className="rounded"/>
        </SwiperSlide>
        <SwiperSlide className="pb-6">
          <img src={img3} alt="" className="rounded"/>
        </SwiperSlide>
        <SwiperSlide className="pb-6">
          <img src={img4} alt="" className="rounded"/>
        </SwiperSlide>
        <SwiperSlide className="pb-6">
          <img src={img5} alt="" className="rounded"/>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Slider;
