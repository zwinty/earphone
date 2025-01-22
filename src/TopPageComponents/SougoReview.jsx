import { Fragment } from 'react'
import ProductReviewCard from './ProductReviewCard'
import './SougoReview.css'


const SougoReview = () =>{
    return(
        <div className='sougoreview-container'>
           
            <h2>総合レビュー</h2>
            <div className="product-review-pc">
            <ProductReviewCard 
                img="./product1.png"            
                star="☆☆☆☆☆"
                brand_name="Sony"
                product_name="Snony A1 Ex"
                review_text="クリアな音質と優れたノイズキャンセリング。快適な装着感で、バッテリーは最大30時間。タッチ操作が少し敏感で、価格はやや高め。高音質を求める人におすすめ。" />
                <ProductReviewCard 
                img="./product1.png"            
                star="☆☆☆☆☆"
                brand_name="Sony"
                product_name="Snony A1 Ex"
                review_text="クリアな音質と優れたノイズキャンセリング。快適な装着感で、バッテリーは最大30時間。タッチ操作が少し敏感で、価格はやや高め。高音質を求める人におすすめ。" />
                <ProductReviewCard 
                img="./product1.png"            
                star="☆☆☆☆☆"
                brand_name="Sony"
                product_name="Snony A1 Ex"
                review_text="クリアな音質と優れたノイズキャンセリング。快適な装着感で、バッテリーは最大30時間。タッチ操作が少し敏感で、価格はやや高め。高音質を求める人におすすめ。" />
                <ProductReviewCard 
                img="./product1.png"            
                star="☆☆☆☆☆"
                brand_name="Sony"
                product_name="Snony A1 Ex"
                review_text="クリアな音質と優れたノイズキャンセリング。快適な装着感で、バッテリーは最大30時間。タッチ操作が少し敏感で、価格はやや高め。高音質を求める人におすすめ。" />
                <ProductReviewCard 
                img="./product1.png"            
                star="☆☆☆☆☆"
                brand_name="Sony"
                product_name="Snony A1 Ex"
                review_text="クリアな音質と優れたノイズキャンセリング。快適な装着感で、バッテリーは最大30時間。タッチ操作が少し敏感で、価格はやや高め。高音質を求める人におすすめ。" />
                <ProductReviewCard 
                img="./product1.png"            
                star="☆☆☆☆☆"
                brand_name="Sony"
                product_name="Snony A1 Ex"
                review_text="クリアな音質と優れたノイズキャンセリング。快適な装着感で、バッテリーは最大30時間。タッチ操作が少し敏感で、価格はやや高め。高音質を求める人におすすめ。" />
            </div>
            <div className="see-more-btn">
                       
                       <button className="seemore-item-btn">
                       もっと見る
                       </button>
                  
                   </div>
                
           
           
        </div>
    )
}

export default SougoReview