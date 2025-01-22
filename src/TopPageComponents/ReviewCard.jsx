import { Fragment } from "react"
import './ReviewCard.css'

const ReviewCard = () =>{
    return(
        <Fragment>
            <div className="review-card-container">
                <div className="review-top">
                    <img className="product-img" src="./staff-review2.jpg" alt="" />
                    <p className="brand-name-review">Nexula</p>
                    <p className="product-name-review">エコーブラストR1</p>
                    <div className="hashtag">
                        <p>#おしゃれ</p>
                        <p>#かっこいい</p>
                    </div>
                    <p className="review-title">Nobleのオープンイヤースタイルはこれだ！</p>
                    <p className="review-text">Noble Audioから、オープンイヤー型ワイヤレスイヤホンが登場しました！</p>

                </div>
                <div className="review-buttom">
                    <img className="staff-img" src="./staff.jpg" alt="" />
                    <div className="staff-info">
                    <p className="staff-name">山梨さん</p>
                    <p className="shop-name">@e☆イヤホン　秋葉原店　本館</p>
                    </div>
                
                </div>
            </div>
        </Fragment>
    )
}

export default ReviewCard