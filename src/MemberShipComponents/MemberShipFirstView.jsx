import "./MemberShipFirstView.css"
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

const MemberShipFirstView = () =>{
    return(
        <>
        <div className="mem-fv-container">
            <div className="fv-img">
                <img src="./member-fv.svg" alt="" />
            </div>
            <div className="mem-btns">
                <button className="first-mem">新規会員登録</button>
                <button className="already-mem">会員の方はこちらログイン</button>
            </div>
        </div>

        <div className="adv-container">
            <div className="adv-title">
                <img src="./adv_title.svg" alt="" />
            </div>
            <div className="adv-pic-container">
                <img src="./adv1.svg" alt="adv" />
                <img src="./adv2.svg" alt="adv" />
                <img src="./adv3.svg" alt="adv" />
                <img src="./adv4.svg" alt="adv" />
            </div>
        </div>

        <div className="return-container">
            <div className="return-title">
                <img src="./return-title.svg" alt="title" />
            </div>
            <div className="return-pic">
                <img src="./return-pic.svg" alt="pic" />
            </div>
            <div className="register-mem-btn">
            <button className="first-mem">今すぐ会員登録する</button>
            </div>
            <div className="mem-banner-container">

            </div> <Swiper className='banner-swiper'
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
      <SwiperSlide><img src="/member-banner.webp" alt="banner" /></SwiperSlide>
      <SwiperSlide><img src="/1.svg" alt="banner" /></SwiperSlide>
      <SwiperSlide><img src="/mem-banner2.svg" alt="banner" /></SwiperSlide>
      <SwiperSlide><img src="/member-banner.webp" alt="banner" /></SwiperSlide>
      <SwiperSlide><img src="/1.svg" alt="banner" /></SwiperSlide>
      <SwiperSlide><img src="/mem-banner2.svg" alt="banner" /></SwiperSlide>
      <SwiperSlide><img src="/member-banner.webp" alt="banner" /></SwiperSlide>
      <SwiperSlide><img src="/1.svg" alt="banner" /></SwiperSlide>
      <SwiperSlide><img src="/mem-banner2.svg" alt="banner" /></SwiperSlide>
      
     
  
      
      <button className="custom-prev">
        <MdOutlineArrowCircleLeft size={32} />
      </button>
      <button className="custom-next">
        <MdOutlineArrowCircleRight size={32} />
      </button>
     
    </Swiper>
    
        </div>
        <div className="map-container">
                <img src="./map.svg" alt="map-pic" />
            </div>
        </>
    )
}
export default MemberShipFirstView