import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, Autoplay  } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css';
import "../TopPageComponents/BannerSlider.css"
import 'swiper/css/autoplay';
import { MdOutlineArrowCircleLeft } from "react-icons/md";
import { MdOutlineArrowCircleRight } from "react-icons/md";
import './KaitoriBannerSlider.css'

const KaitoriBannerSlider = () =>{
  return (
    <div className='kaitori-banner-container'>
      <img src="./campaigntitle.png" alt="" />
    <Swiper className='banner-swiper'
      modules={[Navigation, Pagination, Scrollbar, Autoplay]}
      navigation={{
        nextEl: ".custom-next",
        prevEl: ".custom-prev",
      }}
      pagination={{ clickable: true }}
      autoplay={{ delay: 3000, disableOnInteraction: false }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
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
      <SwiperSlide><img src="/kaitori-banner1.jpg" alt="banner" /></SwiperSlide>
      <SwiperSlide><img src="/kaitori-banner2.webp" alt="banner" /></SwiperSlide>
      <SwiperSlide><img src="/kaitori-banner3.webp" alt="banner" /></SwiperSlide>
      <SwiperSlide><img src="/kaitori-banner4.webp" alt="banner" /></SwiperSlide>
      <SwiperSlide><img src="/kaitori-banner5.webp" alt="banner" /></SwiperSlide>
      <SwiperSlide><img src="/kaitori-banner6.jpg" alt="banner" /></SwiperSlide>
      <SwiperSlide><img src="/kaitori-banner1.jpg" alt="banner" /></SwiperSlide>
      <SwiperSlide><img src="/kaitori-banner2.webp" alt="banner" /></SwiperSlide>
      <SwiperSlide><img src="/kaitori-banner3.webp" alt="banner" /></SwiperSlide>
      <SwiperSlide><img src="/kaitori-banner4.webp" alt="banner" /></SwiperSlide>
      <SwiperSlide><img src="/kaitori-banner5.webp" alt="banner" /></SwiperSlide>
      <SwiperSlide><img src="/kaitori-banner6.jpg" alt="banner" /></SwiperSlide>
     
      
      <button className="custom-prev">
        <MdOutlineArrowCircleLeft size={32} />
      </button>
      <button className="custom-next">
        <MdOutlineArrowCircleRight size={32} />
      </button>
     
    </Swiper>
    </div>
  );
};

export default KaitoriBannerSlider