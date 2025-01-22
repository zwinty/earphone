import { Fragment } from 'react'
import './Blog.css'
import BlogCard from './BlogCard'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/autoplay';


const Blog = () =>{
    return(

      <div className="blog-pc">
    <h2>e☆イヤホンの読みもの！</h2>
      <Swiper className='blog-swiper'
        modules={[Navigation, Pagination, Scrollbar, Autoplay]}
        scrollbar={{ draggable: true }}
        breakpoints={{
          375: {
            slidesPerView: 2,
            spaceBetween: 10,
          },
          640: {
            slidesPerView: 2,
            spaceBetween: 10,
          },
    
          1024: {
            slidesPerView: 4,
            spaceBetween: 20,
          },
        }}
      >
        
          <SwiperSlide>
          <BlogCard img="./blog1.webp" title="Apple Musicの「空間オーディオ」機能で新しい音楽体験をしてみませんか…？" text="皆さんこんにちは！突然ですが、Apple Musicの「空間オーディオ」って皆様ご存知でしょうか……？"/>           
          </SwiperSlide>
          <SwiperSlide>
          <BlogCard img="./blog2.webp" title="【2023年版】専門店スタッフが選ぶおすすめヘッドホン！" text="ヘッドホンの中からワイヤレスヘッドホンのおすすめや、近年話題のノイズキャンセリング搭載の機種など、専門店がおすすめ……"/>
          </SwiperSlide>
          <SwiperSlide>
          <BlogCard img="./blog3.webp" title="安い！コスパ最強完全ワイヤレスイヤホン特集【イヤホン専門店が厳選した機種をご紹介】" text="こちらの記事では、『イヤホン・ヘッドホン専門店e☆イヤホン』が厳選した、人気でコスパの良い完全ワイヤレスイヤホンをご"/>
          </SwiperSlide> <SwiperSlide>
          <BlogCard img="./blog1.webp" title="Apple Musicの「空間オーディオ」機能で新しい音楽体験をしてみませんか…？" text="皆さんこんにちは！突然ですが、Apple Musicの「空間オーディオ」って皆様ご存知でしょうか……？"/>           
          </SwiperSlide>
          <SwiperSlide>
          <BlogCard img="./blog2.webp" title="【2023年版】専門店スタッフが選ぶおすすめヘッドホン！" text="ヘッドホンの中からワイヤレスヘッドホンのおすすめや、近年話題のノイズキャンセリング搭載の機種など、専門店がおすすめ……"/>
          </SwiperSlide>
          <SwiperSlide>
          <BlogCard img="./blog3.webp" title="安い！コスパ最強完全ワイヤレスイヤホン特集【イヤホン専門店が厳選した機種をご紹介】" text="こちらの記事では、『イヤホン・ヘッドホン専門店e☆イヤホン』が厳選した、人気でコスパの良い完全ワイヤレスイヤホンをご"/>
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

export default Blog