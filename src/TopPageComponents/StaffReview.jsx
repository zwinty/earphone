import { Fragment } from "react"
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import ReviewCard from "./ReviewCard";
import './StaffReview.css'
import { MdOutlineArrowCircleLeft } from "react-icons/md";
import { MdOutlineArrowCircleRight } from "react-icons/md";

const StaffReview = () =>{
    return(
           <div className="staff-review">

        
             <h2>スタッフレビュー</h2>
             <Swiper className="review-slider"
               scrollbar={{ draggable: true }}
                
               
                breakpoints={{
                    969:{
                        spaceBetween:10,
                        slidesPerView:4,

                    },
                    769:{
                        spaceBetween:10,
                        slidesPerView:2,

                    },
                    325:{
                        spaceBetween:8,
                        slidesPerView:1,
                    },
                    
    
                }}
               
            >
                <SwiperSlide className="slide">
                   <ReviewCard className="card"/>
                </SwiperSlide>
                <SwiperSlide className="slide">
                   <ReviewCard className="card"/>
                </SwiperSlide>
                <SwiperSlide className="slide">
                   <ReviewCard className="card"/>
                </SwiperSlide>
                <SwiperSlide className="slide">
                   <ReviewCard className="card"/>
                </SwiperSlide>
                <SwiperSlide className="slide">
                   <ReviewCard className="card"/>
                </SwiperSlide>
            </Swiper>
            <div className="see-more-btn">
                       
                       <button className="seemore-item-btn">
                       もっと見る
                       </button>
                  
                   </div>
                
            
                  </div>
                 

      
    )
}
export default StaffReview