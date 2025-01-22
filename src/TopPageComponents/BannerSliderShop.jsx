import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, Autoplay  } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css';
import "./BannerSlider.css"
import 'swiper/css/autoplay';
import { MdOutlineArrowCircleLeft } from "react-icons/md";
import { MdOutlineArrowCircleRight } from "react-icons/md";

const BannerSliderShop = () =>{
  return (
    <Swiper className='banner-swiper'
   
   
      modules={[Navigation, Pagination, Scrollbar, Autoplay]}
      navigation={{
        nextEl: ".custom-next",
        prevEl: ".custom-prev",
      }}
      pagination={{ clickable: true }}
      autoplay={{ delay: 3000, disableOnInteraction: false }}
      breakpoints={{
        375: {
          slidesPerView:1,
          spaceBetween:10,
          
        },
        640: {
          slidesPerView:2,
          spaceBetween:10,
          
        },
        768: {
          slidesPerView:3,
          spaceBetween: 20,  
        },
        1024:{
          slidesPerView:5,
          spaceBetween:20,
        }
      }}
    >
      <SwiperSlide><img src="/banner-shop1.webp" alt="banner" /></SwiperSlide>
      <SwiperSlide><img src="/banner-shop2.webp" alt="banner" /></SwiperSlide>
      <SwiperSlide><img src="/banner-shop3.webp" alt="banner" /></SwiperSlide>
      <SwiperSlide><img src="/banner-shop4.webp" alt="banner" /></SwiperSlide>
      <SwiperSlide><img src="/banner-shop5.webp" alt="banner" /></SwiperSlide>
      <SwiperSlide><img src="/banner-shop6.webp" alt="banner" /></SwiperSlide>
      <SwiperSlide><img src="/banner-shop1.webp" alt="banner" /></SwiperSlide>
      <SwiperSlide><img src="/banner-shop2.webp" alt="banner" /></SwiperSlide>
      <SwiperSlide><img src="/banner-shop3.webp" alt="banner" /></SwiperSlide>
      <SwiperSlide><img src="/banner-shop4.webp" alt="banner" /></SwiperSlide>
      <SwiperSlide><img src="/banner-shop5.webp" alt="banner" /></SwiperSlide>
      <SwiperSlide><img src="/banner-shop6.webp" alt="banner" /></SwiperSlide>
      
      <button className="custom-prev">
        <MdOutlineArrowCircleLeft size={32} />
      </button>
      <button className="custom-next">
        <MdOutlineArrowCircleRight size={32} />
      </button>
     
    </Swiper>
  );
};

export default BannerSliderShop