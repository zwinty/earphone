import './NewArrival.css';
import ProductCardRaw from './ProductCardRaw';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/autoplay';
import { MdOutlineArrowCircleLeft, MdOutlineArrowCircleRight } from 'react-icons/md';

const NewArrival = () => {
  const newProduct = [
    {
      id: 1,
      img: '/product7.png',
      brand_name: 'Nexula',
      category: '新品',
      product_name: 'イヤホン X1',
      price: 12000,
    },
    {
      id: 2,
      img: '/product6.png',
      brand_name: 'Zentrix',
      category: '中古',
      product_name: 'ヘッドホン H2',
      price: 15000,
    },
    {
      id: 3,
      img: '/product5.png',
      brand_name: 'Audivox',
      category: '新品',
      product_name: 'ポータブルスピーカー S1',
      price: 9000,
    },
    {
      id: 4,
      img: '/product4.png',
      brand_name: 'Sonivus',
      category: '買取',
      product_name: 'イヤホン Y1',
      price: 6000,
    },
    {
      id: 5,
      img: '/product3.png',
      brand_name: 'Echozia',
      category: '中古',
      product_name: 'ヘッドセット HS2',
      price: 7000,
    },
    {
      id: 6,
      img: '/product2.png',
      brand_name: 'Tonevia',
      category: '買取',
      product_name: 'サウンドバー SB1',
      price: 5000,
    },
    ,
    {
      "id":7, 
      "img":"/product1.png",
      "brand_name": "Harmonia",
      "category": "新品",
      "product_name": "ヘッドホンプロ HP1",
      "price": 8000
    },
    { 
      "id":8, 
      "img":"/product9.png",
      "brand_name": "Vibraxis",
      "category": "買取",
      "product_name": "ワイヤレスイヤホン W1",
      "price": 10000
    },
    {
      "id":9, 
      "img":"/product8.png",   
      "brand_name": "Luminex",
      "category": "中古",
      "product_name": "イヤホンプロ EP1",
      "price": 15000
    },
    {
      "id":10,
      "img":"/product7.png",   
      "brand_name": "Cypheron",
      "category": "新品",
      "product_name": "ゲーミングヘッドホン GH1",
      "price": 18000
    }
  ];

  return (
    <>
    <div className="new-arrival">
    <h2>新着アイテム</h2>
      <Swiper className='new-swipe'
        modules={[Navigation, Pagination, Scrollbar, Autoplay]}
        scrollbar={{ draggable: true }}
        breakpoints={{
          320: {
            slidesPerView: 2,
            spaceBetween: 10,
          },
        
          640: {
            slidesPerView: 3,
            spaceBetween: 10,
          },
          900: {
            slidesPerView: 4,
            spaceBetween: 20,
          },
          1024: {
            slidesPerView: 5,
            spaceBetween: 20,
          },
        }}
      >
        {newProduct.map((product) => (
          <SwiperSlide key={product.id}>
            <ProductCardRaw product={product} />
          </SwiperSlide>
        ))}
      </Swiper>

     </div>
     <div className="see-more-btn">
                       
                            <button className="seemore-item-btn">
                            もっと見る
                            </button>
                       
                        </div>
    </>
  );
};

export default NewArrival;
