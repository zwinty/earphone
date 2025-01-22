import { Fragment } from "react"
import './ProductReviewCard.css'



const ProductReviewCard = ({img,star,brand_name,product_name,review_text}) =>{
    return(
        <Fragment>
            <div className="product-reviewcard-container">
                <div className="product-review-img">
                    <img src={img} alt="product-photo" />
                </div>
                <div className="product-review-text">
                    <p className="star">{star}</p>
                    <p className="product-brand-p-review">{brand_name}</p>
                    <p className="product-name-p-review">{product_name}</p>
                    <p className="review-text">{review_text}</p>
                    
                </div>
            </div>
            
        </Fragment>
    )
}

export default ProductReviewCard